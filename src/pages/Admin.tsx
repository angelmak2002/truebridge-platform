import { useAuth } from "./_core/hooks/useAuth";
import DashboardLayout from "./components/DashboardLayout";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { trpc } from "./lib/trpc";
import { useState } from "react";
import { toast } from "sonner";
import { AlertCircle, Plus, Trash2, Edit2, Activity } from "lucide-react";

export function Admin() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("applications");

  // Check if user is admin
  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-md w-full p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">å­˜å?è¢«æ?çµ?/h1>
          <p className="text-muted-foreground mb-6">
            ?ªæ??ˆæ??„ç®¡?†å“¡?¯ä»¥å­˜å?æ­¤é??¢ã€?
          </p>
          <a href="/" className="text-primary hover:underline">
            è¿”å?é¦–é?
          </a>
        </Card>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">ç®¡ç?å¾Œå°</h1>
          <p className="text-muted-foreground">ç®¡ç?è©¦å??³è??å?å¸«è??™å? Instagram ?¼å?</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="status">?€??/TabsTrigger>
            <TabsTrigger value="applications">è©¦å??³è?</TabsTrigger>
            <TabsTrigger value="tutors">å°å¸«ç®¡ç?</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
          </TabsList>

          {/* Status Tab */}
          <TabsContent value="status" className="space-y-4">
            <StatusMonitoring />
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="space-y-4">
            <ApplicationsList />
          </TabsContent>

          {/* Tutors Tab */}
          <TabsContent value="tutors" className="space-y-4">
            <TutorsManagement />
          </TabsContent>

          {/* Instagram Tab */}
          <TabsContent value="instagram" className="space-y-4">
            <InstagramPublish />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}

function StatusMonitoring() {
  const { data: applications } = trpc.admin.applications.list.useQuery();
  const { data: tutors } = trpc.admin.tutors.list.useQuery();

  const pendingCount = applications?.filter((a) => a.status === "pending").length || 0;
  const contactedCount = applications?.filter((a) => a.status === "contacted").length || 0;
  const scheduledCount = applications?.filter((a) => a.status === "scheduled").length || 0;
  const completedCount = applications?.filter((a) => a.status === "completed").length || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">å¾…è??†ç”³è«?/p>
            <p className="text-3xl font-bold text-foreground">{pendingCount}</p>
          </div>
          <Activity className="w-8 h-8 text-yellow-500 opacity-50" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">å·²è¯çµ?/p>
            <p className="text-3xl font-bold text-foreground">{contactedCount}</p>
          </div>
          <Activity className="w-8 h-8 text-blue-500 opacity-50" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">å·²æ???/p>
            <p className="text-3xl font-bold text-foreground">{scheduledCount}</p>
          </div>
          <Activity className="w-8 h-8 text-purple-500 opacity-50" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">å·²å???/p>
            <p className="text-3xl font-bold text-foreground">{completedCount}</p>
          </div>
          <Activity className="w-8 h-8 text-green-500 opacity-50" />
        </div>
      </Card>

      <Card className="p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">ç¸½ç”³è«‹æ•¸</p>
            <p className="text-3xl font-bold text-foreground">{applications?.length || 0}</p>
          </div>
          <Activity className="w-8 h-8 text-primary opacity-50" />
        </div>
      </Card>

      <Card className="p-6 md:col-span-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">èªè?å°å¸«</p>
            <p className="text-3xl font-bold text-foreground">{tutors?.length || 0}</p>
          </div>
          <Activity className="w-8 h-8 text-accent opacity-50" />
        </div>
      </Card>
    </div>
  );
}

function ApplicationsList() {
  const { data: applications, isLoading } = trpc.admin.applications.list.useQuery();
  const updateStatusMutation = trpc.admin.applications.updateStatus.useMutation();

  const statuses = [
    { value: "pending", label: "å¾…è???, color: "bg-yellow-100 text-yellow-800" },
    { value: "contacted", label: "å·²è¯çµ?, color: "bg-blue-100 text-blue-800" },
    { value: "scheduled", label: "å·²æ???, color: "bg-purple-100 text-purple-800" },
    { value: "completed", label: "å·²å???, color: "bg-green-100 text-green-800" },
    { value: "cancelled", label: "å·²å?æ¶?, color: "bg-red-100 text-red-800" },
  ];

  const handleStatusChange = async (
    id: number,
    newStatus: string,
  ) => {
    try {
      await updateStatusMutation.mutateAsync({
        id,
        status: newStatus as any,
      });
      toast.success("?€?‹å·²?´æ–°");
    } catch (error) {
      toast.error("?´æ–°å¤±æ?");
    }
  };

  if (isLoading) {
    return <div className="p-8">è¼‰å…¥ä¸?..</div>;
  }

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">è©¦å??³è?ç´€??/h2>
      {applications && applications.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold">å®¶é•·å§“å?</th>
                <th className="text-left py-3 px-4 font-semibold">?¯çµ¡?¹å?</th>
                <th className="text-left py-3 px-4 font-semibold">å­¸ç?å¹´ç?</th>
                <th className="text-left py-3 px-4 font-semibold">ç§‘ç›®</th>
                <th className="text-left py-3 px-4 font-semibold">?€??/th>
                <th className="text-left py-3 px-4 font-semibold">?ä?</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => {
                const statusOption = statuses.find((s) => s.value === app.status);
                return (
                  <tr key={app.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{app.parentName}</td>
                    <td className="py-3 px-4">
                      <div className="text-xs">
                        <div>{app.whatsapp}</div>
                        <div className="text-muted-foreground">{app.email}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">{app.grade}</td>
                    <td className="py-3 px-4 text-xs">{app.subjects}</td>
                    <td className="py-3 px-4">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app.id, e.target.value)}
                        className={`px-2 py-1 rounded text-xs font-semibold ${statusOption?.color}`}
                      >
                        {statuses.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="py-3 px-4">
                      <a
                        href={`https://wa.me/${app.whatsapp.replace(/\s/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-xs"
                      >
                        WhatsApp
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted-foreground text-center py-8">?«ç„¡?³è?ç´€??/p>
      )}
    </Card>
  );
}

function TutorsManagement() {
  const utils = trpc.useUtils();
  const { data: tutors, isLoading } = trpc.admin.tutors.list.useQuery();
  const createMutation = trpc.admin.tutors.create.useMutation({
    onSuccess: () => utils.admin.tutors.list.invalidate(),
  });
  const updateMutation = trpc.admin.tutors.update.useMutation({
    onSuccess: () => utils.admin.tutors.list.invalidate(),
  });
  const deleteMutation = trpc.admin.tutors.delete.useMutation({
    onSuccess: () => utils.admin.tutors.list.invalidate(),
  });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    subjects: "",
    bio: "",
    avatarUrl: "",
  });

  const handleSave = async () => {
    if (!formData.name || !formData.education || !formData.subjects || !formData.bio) {
      toast.error("è«‹å¡«å¯«æ??‰å?å¡«æ?ä½?);
      return;
    }

    try {
      if (editingId) {
        await updateMutation.mutateAsync({
          id: editingId,
          name: formData.name,
          education: formData.education,
          subjects: formData.subjects,
          bio: formData.bio,
          avatarUrl: formData.avatarUrl || undefined,
        });
        toast.success("å°å¸«å·²æ›´??);
        setEditingId(null);
      } else {
        await createMutation.mutateAsync({
          name: formData.name,
          education: formData.education,
          subjects: formData.subjects,
          bio: formData.bio,
          avatarUrl: formData.avatarUrl || undefined,
        });
        toast.success("å°å¸«å·²æ–°å¢?);
      }
      setFormData({ name: "", education: "", subjects: "", bio: "", avatarUrl: "" });
      setShowForm(false);
    } catch (error) {
      toast.error(editingId ? "?´æ–°å¤±æ?" : "?°å?å¤±æ?");
    }
  };

  const handleEdit = (tutor: any) => {
    setEditingId(tutor.id);
    setFormData({
      name: tutor.name,
      education: tutor.education,
      subjects: tutor.subjects,
      bio: tutor.bio,
      avatarUrl: tutor.avatarUrl || "",
    });
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("ç¢ºå?è¦åˆª?¤æ­¤å°å¸«?ï?")) return;
    try {
      await deleteMutation.mutateAsync({ id });
      toast.success("å°å¸«å·²åˆª??);
      await utils.admin.tutors.list.invalidate();
    } catch (error) {
      toast.error("?ªé™¤å¤±æ?");
    }
  };

  if (isLoading) {
    return <div className="p-8">è¼‰å…¥ä¸?..</div>;
  }

  return (
    <>
      <Card className="p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">å°å¸«ç®¡ç?</h2>
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => {
              setEditingId(null);
              setFormData({ name: "", education: "", subjects: "", bio: "", avatarUrl: "" });
              setShowForm(!showForm);
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            ?°å?å°å¸«
          </Button>
        </div>

        {showForm && (
          <div className="mb-6 p-4 border border-border rounded-lg space-y-4">
            <h3 className="font-semibold">{editingId ? "ç·¨è¼¯å°å¸«" : "?°å?å°å¸«"}</h3>
            <input
              type="text"
              placeholder="å°å¸«å§“å?"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded"
            />
            <input
              type="text"
              placeholder="å­¸æ­·ï¼ˆå?ï¼šé?æ¸¯å¤§å­?BBAï¼?
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded"
            />
            <input
              type="text"
              placeholder="è£œç?ç§‘ç›®ï¼ˆç”¨?å??”ï?"
              value={formData.subjects}
              onChange={(e) => setFormData({ ...formData, subjects: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded"
            />
            <textarea
              placeholder="å°å¸«ç°¡ä?"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              rows={3}
              className="w-full px-3 py-2 border border-border rounded"
            />
            <input
              type="url"
              placeholder="?­å? URLï¼ˆå¯?¸ï?"
              value={formData.avatarUrl}
              onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded"
            />
            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                disabled={createMutation.isPending || updateMutation.isPending}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {createMutation.isPending || updateMutation.isPending
                  ? editingId
                    ? "?´æ–°ä¸?.."
                    : "?°å?ä¸?.."
                  : editingId
                    ? "ç¢ºè??´æ–°"
                    : "ç¢ºè??°å?"}
              </Button>
              <Button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ name: "", education: "", subjects: "", bio: "", avatarUrl: "" });
                }}
                variant="outline"
                className="flex-1"
              >
                ?–æ?
              </Button>
            </div>
          </div>
        )}
      </Card>

      {tutors && tutors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutors.map((tutor) => (
            <Card key={tutor.id} className="p-4">
              {tutor.avatarUrl && (
                <img
                  src={tutor.avatarUrl}
                  alt={tutor.name}
                  className="w-full h-32 object-cover rounded mb-3"
                />
              )}
              <h3 className="font-bold text-foreground mb-2">{tutor.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{tutor.education}</p>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{tutor.bio}</p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => handleEdit(tutor)}
                >
                  <Edit2 className="w-4 h-4 mr-1" />
                  ç·¨è¼¯
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex-1"
                  onClick={() => handleDelete(tutor.id)}
                  disabled={deleteMutation.isPending}
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  ?ªé™¤
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">?«ç„¡å°å¸«è³‡æ?</p>
        </Card>
      )}
    </>
  );
}

function InstagramPublish() {
  const publishMutation = trpc.admin.instagram.publish.useMutation();
  const [videoUrl, setVideoUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const handlePublish = async () => {
    if (!videoUrl || !caption) {
      toast.error("è«‹å¡«å¯«æ??‰å?å¡«æ?ä½?);
      return;
    }

    try {
      const result = await publishMutation.mutateAsync({
        videoUrl,
        caption,
        coverUrl: coverUrl || undefined,
      });

      if (result.success) {
        toast.success(
          "å·²æ?äº?Instagram ?¼å?è«‹æ?\nè«‹åœ¨ Manus ç®¡ç?ä¸­å?ç¢ºè??¼å?",
        );
        setVideoUrl("");
        setCaption("");
        setCoverUrl("");
      }
    } catch (error: any) {
      toast.error(`?¼å?å¤±æ?: ${error.message}`);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-4">?¼å? Instagram Reels</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">å½±ç? URL *</label>
          <input
            type="url"
            placeholder="https://example.com/video.mp4"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg"
          />
          <p className="text-xs text-muted-foreground mt-1">
            ?¯æ´ MP4?MOV?WEBM ç­‰æ ¼å¼ï??€å¤?300 MB
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">?‡æ??§å®¹ *</label>
          <textarea
            placeholder="è¼¸å…¥ Instagram è²¼æ??‡æ?..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={5}
            className="w-full px-4 py-2 border border-border rounded-lg"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {caption.length}/2200 å­—ç¬¦
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            å°é¢?–ç? URLï¼ˆå¯?¸ï?
          </label>
          <input
            type="url"
            placeholder="https://example.com/cover.jpg"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg"
          />
          <p className="text-xs text-muted-foreground mt-1">?€å¤?8 MBï¼Œå»ºè­°æ?ä¾?1:1</p>
        </div>

        <Button
          onClick={handlePublish}
          disabled={publishMutation.isPending}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
        >
          {publishMutation.isPending ? "?¼å?ä¸?.." : "?¼å???Instagram"}
        </Button>

        <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg space-y-2">
          <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
            ?’¡ Instagram Reels è¨ˆæ??€æ±‚ï?
          </p>
          <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
            <li>æ¯”ä?ï¼?:16ï¼ˆè±¬å¯¶é?æ¯”ä?ï¼?/li>
            <li>?€?·æ??“ï?90 ç§?/li>
            <li>æª”æ?å¤§å?ï¼šæ?å¤?300 MB</li>
            <li>?¯æ´?¼å?ï¼šMP4, MOV, WEBM ç­?/li>
          </ul>
        </div>
      </div>
    </Card>
  );
}
