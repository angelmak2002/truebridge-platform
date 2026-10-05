export interface QuestionTranslations {
  'zh-HK': string; 'en': string; 'ja': string; 'ko': string; 'zh-CN': string;
}
export interface Question {
  id: number;
  subject: QuestionTranslations;
  question: QuestionTranslations;
  options: QuestionTranslations[];
  correctAnswer: number;
}
export interface GradeExercises {
  grade: string;
  gradeLabel: QuestionTranslations;
  questions: Question[];
}

function getWeekNumber(d: Date) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
  return Math.ceil(( (date.getTime() - yearStart.getTime()) / 86400000 + 1)/7);
}
function seededRandom(seed: number) {
  let t = seed += 0x6D2B79F5;
  return function() {
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}
function parseGradeNum(c: string){ if(c.startsWith('p')) return parseInt(c.replace('p','')); if(c.startsWith('f')) return parseInt(c.replace('f',''))+6; return 1; }

const SUBJECTS = {
  chinese: { 'zh-HK': '中文', 'en': 'Chinese', 'ja': '中国語', 'ko': '중국어', 'zh-CN': '中文' },
  classical: { 'zh-HK': '文言文', 'en': 'Classical Chinese', 'ja': '古典中国語', 'ko': '고전 중국어', 'zh-CN': '文言文' },
  english: { 'zh-HK': '英文', 'en': 'English', 'ja': '英語', 'ko': '영어', 'zh-CN': '英文' },
  math: { 'zh-HK': '數學', 'en': 'Math', 'ja': '数学', 'ko': '수학', 'zh-CN': '数学' },
  engMath: { 'zh-HK': '英文數學', 'en': 'English Math', 'ja': '英語数学', 'ko': '영어 수학', 'zh-CN': '英文数学' },
}

// 直接用你舊檔題庫 - 中度難度
const bank = {
  chinese: [
    { q: { 'zh-HK': '哪一個詞語最能形容「堅持不懈，努力不放棄」？', 'en': 'Which idiom best describes persevering never giving up?', 'ja': '「粘り強く諦めず努力」を表す言葉は？', 'ko': '끈기 있게 포기하지 않는 것을 나타내는 말은?', 'zh-CN': '哪一个词语最能形容“坚持不懈，努力不放弃”？' }, opts: [['半途而廢','Give up halfway','途中で諦める','중도 포기','半途而废'],['持之以恆','Persevere','継続は力なり','꾸준히 하다','持之以恒'],['朝三暮四','Change mind','朝三暮四','조삼모사','朝三暮四'],['三心二意','Two minds','優柔不断','갈팡질팡','三心二意']], ans:1 },
    { q: { 'zh-HK': '「他的文章寫得非常生動，彷彿把讀者帶進了另一個世界。」運用了什麼修辭？', 'en': 'His writing is vivid as if transporting readers. What device?', 'ja': '生き生きとして別世界に連れて行くかのよう、修辞は？', 'ko': '생생하여 다른 세상으로 데려가는 듯, 수사법은?', 'zh-CN': '“他的文章写得非常生动，仿佛把读者带进了另一个世界。”用了什么修辞？' }, opts: [['擬人','Personification','擬人化','의인화','拟人'],['比喻','Simile','比喩','비유','比喻'],['誇張','Hyperbole','誇張','과장','夸张'],['排比','Parallelism','並列','병렬','排比']], ans:1 },
    { q: { 'zh-HK': '選擇最適當的詞語：「他的成績突飛猛進，進步（ ）。」', 'en': 'His grades leaped, progress is ( ).', 'ja': '成績は飛躍的に向上し、進歩は（ ）。', 'ko': '성적은 비약적으로 향상, 발전은 ( ).', 'zh-CN': '选择最适当的词语：“他的成绩突飞猛进，进步（ ）。 ”' }, opts: [['顯著','remarkable','顕著','현저','显著'],['馬虎','careless','いい加減','엉성','马虎'],['隨便','casual','適当','대충','随便'],['勉強','reluctant','無理やり','억지','勉强']], ans:0 },
    { q: { 'zh-HK': '「排比」修辭的特點是什麼？', 'en': 'What is parallelism?', 'ja': '排比の特徴は？', 'ko': '배비의 특징은?', 'zh-CN': '“排比”修辞的特点是什么？' }, opts: [['重複相同句式','Same structure repeated','同じ文型を繰り返す','동일 구조 반복','重复相同句式'],['誇大事實','Exaggerate','事実を誇張','사실 과장','夸大事实'],['擬人化','Personification','擬人化','의인화','拟人化'],['直接比較','Direct compare','直接比較','직접 비교','直接比较']], ans:0 },
  ],
  classical: [
    { q: { 'zh-HK': '「所」在文言文中通常表示什麼？', 'en': 'What does 所 indicate in Classical Chinese?', 'ja': '漢文の「所」は何を意味する？', 'ko': '한문에서 所는 무엇을 의미?', 'zh-CN': '“所”在文言文中通常表示什么？' }, opts: [['地方','Place','場所','장소','地方'],['所有','Possession','所有','소유','所有'],['被動或名詞化','Passive/nominalization','受動/名詞化','피동/명사화','被动或名词化'],['時間','Time','時間','시간','时间']], ans:2 },
    { q: { 'zh-HK': '「者」在文言文中通常表示什麼？', 'en': 'What does 者 indicate?', 'ja': '「者」は何を表す？', 'ko': '者는 무엇을 나타내는가?', 'zh-CN': '“者”在文言文中通常表示什么？' }, opts: [['地方','Place','場所','장소','地方'],['時間','Time','時間','시간','时间'],['人或事物','Person or thing','人または物事','사람 또는 사물','人或事物'],['動作','Action','動作','동작','动作']], ans:2 },
    { q: { 'zh-HK': '「學而時習之，不亦說乎」中「說」通什麼？', 'en': 'In Analects, 說 is通?', 'ja': '「説」は何に通じる？', 'ko': '說は何と通じる？', 'zh-CN': '“学而时习之，不亦说乎”中“说”通什么？' }, opts: [['悅','joy','喜び','기쁨','悦'],['話','speech','話','말','话'],['稅','tax','税','세금','税'],['脫','escape','脱','탈출','脱']], ans:0 },
  ],
  english: [
    { q: { 'en': 'By the time you arrive, I _____ finished my homework.' }, opts: [['will finish','will finish','will finish','will finish','will finish'],['will have finished','will have finished','will have finished'],['finish','finish','finish','finish','finish'],['have finished','have finished','have finished','have finished','have finished']], ans:1 },
    { q: { 'en': 'Despite _____ hard, he didn’t pass the exam.' }, opts: [['study','study','study','study','study'],['studying','studying','studying','studying','studying'],['to study','to study','to study','to study','to study'],['studied','studied','studied','studied','studied']], ans:1 },
    { q: { 'en': 'The teacher asked the students _____ their homework on time.' }, opts: [['to submit','to submit','to submit','to submit','to submit'],['submit','submit','submit','submit','submit'],['submitting','submitting','submitting','submitting','submitting'],['submitted','submitted','submitted','submitted','submitted']], ans:0 },
  ],
  math: [
    { q: { 'zh-HK': '一個圓形的面積是 78.5 平方厘米，它的半徑是多少？（π≈3.14）', 'en': 'Area 78.5 cm², radius? π≈3.14', 'ja': '面積78.5cm²、半径は？', 'ko': '넓이 78.5cm², 반지름은?', 'zh-CN': '一个圆形的面积是78.5平方厘米，它的半径是多少？（π≈3.14）' }, opts: [['5 厘米','5 cm','5cm','5cm','5厘米'],['10 厘米','10 cm','10cm','10cm','10厘米'],['15 厘米','15 cm','15cm','15cm','15厘米'],['20 厘米','20 cm','20cm','20cm','20厘米']], ans:0 },
    { q: { 'zh-HK': '一個長方體長10厘米、闊5厘米、高4厘米，體積是多少？', 'en': 'Cuboid 10x5x4, volume?', 'ja': '直方体10x5x4、体積は？', 'ko': '직육면체 10x5x4, 부피는?', 'zh-CN': '一个长方体长10厘米、宽5厘米、高4厘米，体积是多少？' }, opts: [['100 立方厘米','100 cm³','100cm³','100cm³','100立方厘米'],['150 立方厘米','150 cm³','150cm³','150cm³','150立方厘米'],['200 立方厘米','200 cm³','200cm³','200cm³','200立方厘米'],['250 立方厘米','250 cm³','250cm³','250cm³','250立方厘米']], ans:2 },
    { q: { 'zh-HK': '一個數的25%是50，這個數是多少？', 'en': '25% of a number is 50, what is it?', 'ja': 'ある数の25%が50、その数は？', 'ko': '어떤 수의 25%가 50, 그 수는?', 'zh-CN': '一个数的25%是50，这个数是多少？' }, opts: [['100','100','100','100','100'],['150','150','150','150','150'],['200','200','200','200','200'],['250','250','250','250','250']], ans:2 },
  ],
  engMath: [
    { q: { 'en': 'A number’s 25% is 50. What is the number?' }, opts: [['100','100','100','100','100'],['150','150','150','150','150'],['200','200','200','200','200'],['250','250','250','250','250']], ans:2 },
    { q: { 'en': 'If you have $100 and spend 30%, how much is left?' }, opts: [['$60','$60','$60','$60','$60'],['$70','$70','$70','$70','$70'],['$80','$80','$80','$80','$80'],['$90','$90','$90','$90','$90']], ans:1 },
    { q: { 'en': 'A shop has 120 apples. 25% are sold. How many are left?' }, opts: [['90','90','90','90','90'],['30','30','30','30','30'],['100','100','100','100','100'],['80','80','80','80','80']], ans:0 },
    { q: { 'en': 'A car travels 60km/h for 2.5 hours. How far does it go?' }, opts: [['150km','150km','150km','150km','150km'],['120km','120km','120km','120km','120km'],['100km','100km','100km','100km','100km'],['200km','200km','200km','200km','200km']], ans:0 },
  ]
}

function makeQ(id: number, subj: any, item: any, rand: () => number, isEngLocked: boolean): Question {
  let qT: QuestionTranslations;
  if(isEngLocked){
    const enOnly = item.q['en'] || item.q['zh-HK'];
    qT = { 'zh-HK': enOnly, 'en': enOnly, 'ja': enOnly, 'ko': enOnly, 'zh-CN': enOnly };
  } else {
    qT = item.q as QuestionTranslations;
  }
  const opts = item.opts.map((o: any)=> isEngLocked? { 'zh-HK': o[0], 'en': o[0], 'ja': o[0], 'ko': o[0], 'zh-CN': o[0] } : { 'zh-HK': o[0], 'en': o[1], 'ja': o[2], 'ko': o[3], 'zh-CN': o[4] }) as QuestionTranslations[];
  return { id, subject: subj, question: qT, options: opts, correctAnswer: item.ans };
}

function generateGrade(gradeCode: string, gradeLabel: QuestionTranslations, week: number): GradeExercises {
  const num = parseGradeNum(gradeCode);
  const rand = seededRandom(week*100 + num*31);
  const qs: Question[] = [];
  for(let i=1;i<=15;i++){
    const mod = i % 5;
    if(mod===0){ const it = bank.math[Math.floor(rand()*bank.math.length)]; qs.push(makeQ(i, SUBJECTS.math, it, rand, false)); }
    else if(mod===1){ const it = bank.chinese[Math.floor(rand()*bank.chinese.length)]; qs.push(makeQ(i, SUBJECTS.chinese, it, rand, false)); }
    else if(mod===2){ const it = bank.classical[Math.floor(rand()*bank.classical.length)]; qs.push(makeQ(i, SUBJECTS.classical, it, rand, false)); }
    else if(mod===3){ const it = bank.english[Math.floor(rand()*bank.english.length)]; qs.push(makeQ(i, SUBJECTS.english, it, rand, true)); }
    else { const it = bank.engMath[Math.floor(rand()*bank.engMath.length)]; qs.push(makeQ(i, SUBJECTS.engMath, it, rand, true)); }
  }
  return { grade: gradeCode, gradeLabel, questions: qs };
}

const week = getWeekNumber(new Date());
const grades = ["p1","p2","p3","p4","p5","p6","f1","f2","f3"];
const labels: any = {
  p1: { 'zh-HK': '小一', 'en': 'Grade 1', 'ja': '小学1年', 'ko': '초등학교 1학년', 'zh-CN': '小学一年级' },
  p2: { 'zh-HK': '小二', 'en': 'Grade 2', 'ja': '小学2年', 'ko': '초등학교 2학년', 'zh-CN': '小学二年级' },
  p3: { 'zh-HK': '小三', 'en': 'Grade 3', 'ja': '小学3年', 'ko': '초등학교 3학년', 'zh-CN': '小学三年级' },
  p4: { 'zh-HK': '小四', 'en': 'Grade 4', 'ja': '小学4年', 'ko': '초등학교 4학년', 'zh-CN': '小学四年级' },
  p5: { 'zh-HK': '小五', 'en': 'Grade 5', 'ja': '小学5年', 'ko': '초등학교 5학년', 'zh-CN': '小学五年级' },
  p6: { 'zh-HK': '小六', 'en': 'Grade 6', 'ja': '小学6年', 'ko': '초등학교 6학년', 'zh-CN': '小学六年级' },
  f1: { 'zh-HK': '中一', 'en': 'Form 1', 'ja': '中学1年', 'ko': '중학교 1학년', 'zh-CN': '初中一年级' },
  f2: { 'zh-HK': '中二', 'en': 'Form 2', 'ja': '中学2年', 'ko': '중학교 2학년', 'zh-CN': '初中二年级' },
  f3: { 'zh-HK': '中三', 'en': 'Form 3', 'ja': '中学3年', 'ko': '중학교 3학년', 'zh-CN': '初中三年级' },
}
export const exercisesDataMultilingual: GradeExercises[] = grades.map(g => generateGrade(g, labels[g], week));