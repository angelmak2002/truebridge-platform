export interface QuestionTranslations {
  'zh-HK': string;
  'en': string;
  'ja': string;
  'ko': string;
  'zh-CN': string;
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

export const exercisesDataMultilingual: GradeExercises[] = [
  {
    "grade": "p1",
    "gradeLabel": {
      "zh-HK": "小一",
      "en": "Grade 1",
      "ja": "小学1年",
      "ko": "초등학교 1학년",
      "zh-CN": "小学一年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "哪一個詞語最能形容「堅持不懈，努力不放棄」？",
          "en": "Which idiom best describes 'persevering tirelessly and never giving up'?",
          "ja": "「粘り強く、諦めずに努力する」を最もよく表す言葉はどれですか？",
          "ko": "‘끈기 있게 노력하고 포기하지 않는’ 것을 가장 잘 나타내는 단어는 무엇입니까?",
          "zh-CN": "哪一个词语最能形容“坚持不懈，努力不放弃”？"
        },
        "options": [
          {
            "zh-HK": "A. 半途而廢",
            "en": "A. Give up halfway",
            "ja": "A. 途中で諦める",
            "ko": "A. 중도 포기",
            "zh-CN": "A. 半途而废"
          },
          {
            "zh-HK": "B. 持之以恆",
            "en": "B. Persevere",
            "ja": "B. 継続は力なり",
            "ko": "B. 꾸준히 하다",
            "zh-CN": "B. 持之以恒"
          },
          {
            "zh-HK": "C. 朝三暮四",
            "en": "C. Change one's mind frequently",
            "ja": "C. 朝三暮四",
            "ko": "C. 조삼모사",
            "zh-CN": "C. 朝三暮四"
          },
          {
            "zh-HK": "D. 三心二意",
            "en": "D. Be of two minds",
            "ja": "D. 優柔不断",
            "ko": "D. 갈팡질팡하다",
            "zh-CN": "D. 三心二意"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "「他的文章寫得非常生動，彷彿把讀者帶進了另一個世界。」這句話運用了什麼修辭手法？",
          "en": "\"His writing is very vivid, as if it transports readers into another world.\" What rhetorical device is used in this sentence?",
          "ja": "「彼の文章は非常に生き生きとしており、まるで読者を別の世界に連れて行くかのようだ。」この文で使われている修辞技法は何ですか？",
          "ko": "\"그의 글은 매우 생생하여 마치 독자를 다른 세상으로 데려가는 것 같다.\" 이 문장에서 사용된 수사법은 무엇인가요?",
          "zh-CN": "\"他的文章写得非常生动，仿佛把读者带进了另一个世界。\"这句话运用了什么修辞手法？"
        },
        "options": [
          {
            "zh-HK": "A. 擬人",
            "en": "A. Personification",
            "ja": "A. 擬人化",
            "ko": "A. 의인화",
            "zh-CN": "A. 拟人"
          },
          {
            "zh-HK": "B. 比喻",
            "en": "B. Simile",
            "ja": "B. 比喩",
            "ko": "B. 비유",
            "zh-CN": "B. 比喻"
          },
          {
            "zh-HK": "C. 誇張",
            "en": "C. Hyperbole",
            "ja": "C. 誇張",
            "ko": "C. 과장",
            "zh-CN": "C. 夸张"
          },
          {
            "zh-HK": "D. 排比",
            "en": "D. Parallelism",
            "ja": "D. 並列",
            "ko": "D. 병렬",
            "zh-CN": "D. 排比"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "選擇最適當的詞語填空：「他的成績突飛猛進，進步（ ）。」",
          "en": "Choose the most appropriate word to fill in the blank: \"His grades have improved by leaps and bounds, progressing ( ).\"",
          "ja": "最も適切な語句を選んで空欄を埋めなさい：「彼の成績は飛躍的に向上し、進歩は（ ）。」",
          "ko": "가장 적절한 단어를 선택하여 빈칸을 채우시오: \"그의 성적은 비약적으로 향상되었고, 발전은 ( ).\"",
          "zh-CN": "选择最 H 适的词语填空：「他的成绩突飞猛进，进步（ ）。」"
        },
        "options": [
          {
            "zh-HK": "A. 顯著",
            "en": "A. remarkable",
            "ja": "A. 顕著",
            "ko": "A. 현저하다",
            "zh-CN": "A. 显著"
          },
          {
            "zh-HK": "B. 明顯",
            "en": "B. obvious",
            "ja": "B. 明らか",
            "ko": "B. 명확하다",
            "zh-CN": "B. 明显"
          },
          {
            "zh-HK": "C. 迅速",
            "en": "C. rapid",
            "ja": "C. 迅速",
            "ko": "C. 신속하다",
            "zh-CN": "C. 迅速"
          },
          {
            "zh-HK": "D. 快速",
            "en": "D. fast",
            "ja": "D. 快速",
            "ko": "D. 빠르다",
            "zh-CN": "D. 快速"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "한문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「所」在文言文中通常表示什麼？",
          "en": "What does \"所\" usually indicate in Classical Chinese?",
          "ja": "漢文における「所」は通常何を意味しますか？",
          "ko": "한문에서 '所'는 일반적으로 무엇을 의미합니까?",
          "zh-CN": "“所”在文言文中通常表示什么？"
        },
        "options": [
          {
            "zh-HK": "A. 地方",
            "en": "A. Place",
            "ja": "A. 場所",
            "ko": "A. 장소",
            "zh-CN": "A. 地方"
          },
          {
            "zh-HK": "B. 所有",
            "en": "B. Possession",
            "ja": "B. 所有",
            "ko": "B. 소유",
            "zh-CN": "B. 所有"
          },
          {
            "zh-HK": "C. 被動或名詞化",
            "en": "C. Passive voice or nominalization",
            "ja": "C. 受動態または名詞化",
            "ko": "C. 피동 또는 명사화",
            "zh-CN": "C. 被动或名词化"
          },
          {
            "zh-HK": "D. 時間",
            "en": "D. Time",
            "ja": "D. 時間",
            "ko": "D. 시간",
            "zh-CN": "D. 时间"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「為」在文言文中可以表示什麼？",
          "en": "What can \"為\" mean in Classical Chinese?",
          "ja": "古典中国語において「為」は何を意味しますか？",
          "ko": "고전 중국어에서 \"為\"는 무엇을 의미할 수 있습니까?",
          "zh-CN": "“为”在文言文中可以表示什么？"
        },
        "options": [
          {
            "zh-HK": "A. 只有動詞",
            "en": "A. Only a verb",
            "ja": "A. 動詞のみ",
            "ko": "A. 동사만",
            "zh-CN": "A. 只有动词"
          },
          {
            "zh-HK": "B. 動詞或介詞",
            "en": "B. Verb or preposition",
            "ja": "B. 動詞または前置詞",
            "ko": "B. 동사 또는 전치사",
            "zh-CN": "B. 动词或介词"
          },
          {
            "zh-HK": "C. 只有介詞",
            "en": "C. Only a preposition",
            "ja": "C. 前置詞のみ",
            "ko": "C. 전치사만",
            "zh-CN": "C. 只有介词"
          },
          {
            "zh-HK": "D. 只有名詞",
            "en": "D. Only a noun",
            "ja": "D. 名詞のみ",
            "ko": "D. 명사만",
            "zh-CN": "D. 只有名词"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英语"
        },
        "question": {
          "zh-HK": "\"By the time you arrive, I _____ finished my homework.\"",
          "en": "By the time you arrive, I _____ finished my homework.",
          "ja": "あなたが到着するまでに、私は宿題を終えているだろう。",
          "ko": "당신이 도착할 때쯤이면, 나는 숙제를 끝냈을 것이다.",
          "zh-CN": "等你到达时，我将会完成我的作业。"
        },
        "options": [
          {
            "zh-HK": "A. will finish",
            "en": "A. will finish",
            "ja": "A. 終えるだろう",
            "ko": "A. 끝낼 것이다",
            "zh-CN": "A. 将会完成"
          },
          {
            "zh-HK": "B. will have finished",
            "en": "B. will have finished",
            "ja": "B. 終えているだろう",
            "ko": "B. 끝냈을 것이다",
            "zh-CN": "B. 将会已经完成"
          },
          {
            "zh-HK": "C. finish",
            "en": "C. finish",
            "ja": "C. 終える",
            "ko": "C. 끝내다",
            "zh-CN": "C. 完成"
          },
          {
            "zh-HK": "D. have finished",
            "en": "D. have finished",
            "ja": "D. 終えた",
            "ko": "D. 끝냈다",
            "zh-CN": "D. 已经完成"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英语"
        },
        "question": {
          "zh-HK": "\"The teacher asked the students _____ their homework on time.\"",
          "en": "The teacher asked the students _____ their homework on time.",
          "ja": "先生は生徒たちに時間通りに宿題を提出するよう頼んだ。",
          "ko": "선생님은 학생들에게 제시간에 숙제를 제출하라고 요청했습니다.",
          "zh-CN": "老师要求学生们按时交作业。"
        },
        "options": [
          {
            "zh-HK": "A. to submit",
            "en": "A. to submit",
            "ja": "A. 提出すること",
            "ko": "A. 제출하는 것",
            "zh-CN": "A. 提交"
          },
          {
            "zh-HK": "B. submit",
            "en": "B. submit",
            "ja": "B. 提出する",
            "ko": "B. 제출하다",
            "zh-CN": "B. 提交"
          },
          {
            "zh-HK": "C. submitting",
            "en": "C. submitting",
            "ja": "C. 提出している",
            "ko": "C. 제출하는 중",
            "zh-CN": "C. 正在提交"
          },
          {
            "zh-HK": "D. submitted",
            "en": "D. submitted",
            "ja": "D. 提出された",
            "ko": "D. 제출된",
            "zh-CN": "D. 已提交"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "一個圓形的面積是 78.5 平方厘米，它的半徑是多少？（取 π ≈ 3.14）",
          "en": "The area of a circle is 78.5 square centimeters. What is its radius? (Take π ≈ 3.14)",
          "ja": "円の面積は78.5平方センチメートルです。その半径はいくつですか？（π ≈ 3.14とする）",
          "ko": "원의 넓이가 78.5제곱센티미터입니다. 반지름은 얼마입니까? (π ≈ 3.14로 계산)",
          "zh-CN": "一个圆形的面积是 78.5 平方厘米，它的半径是多少？（取 π ≈ 3.14）"
        },
        "options": [
          {
            "zh-HK": "A. 5 厘米",
            "en": "A. 5 cm",
            "ja": "A. 5 センチメートル",
            "ko": "A. 5 센티미터",
            "zh-CN": "A. 5 厘米"
          },
          {
            "zh-HK": "B. 10 厘米",
            "en": "B. 10 cm",
            "ja": "B. 10 センチメートル",
            "ko": "B. 10 센티미터",
            "zh-CN": "B. 10 厘米"
          },
          {
            "zh-HK": "C. 15 厘米",
            "en": "C. 15 cm",
            "ja": "C. 15 センチメートル",
            "ko": "C. 15 센티미터",
            "zh-CN": "C. 15 厘米"
          },
          {
            "zh-HK": "D. 20 厘米",
            "en": "D. 20 cm",
            "ja": "D. 20 センチメートル",
            "ko": "D. 20 센티미터",
            "zh-CN": "D. 20 厘米"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "一個長方體的長、闊、高分別是 10 厘米、5 厘米和 4 厘米，它的體積是多少？",
          "en": "The length, width, and height of a cuboid are 10 cm, 5 cm, and 4 cm respectively. What is its volume?",
          "ja": "直方体の長さ、幅、高さはそれぞれ10センチメートル、5センチメートル、4センチメートルです。その体積はいくつですか？",
          "ko": "직육면체의 길이, 너비, 높이는 각각 10cm, 5cm, 4cm입니다. 부피는 얼마입니까?",
          "zh-CN": "一个长方体的长、宽、高分别是 10 厘米、5 厘米和 4 厘米，它的体积是多少？"
        },
        "options": [
          {
            "zh-HK": "A. 100 立方厘米",
            "en": "A. 100 cubic centimeters",
            "ja": "A. 100立方センチメートル",
            "ko": "A. 100 세제곱센티미터",
            "zh-CN": "A. 100 立方厘米"
          },
          {
            "zh-HK": "B. 150 立方厘米",
            "en": "B. 150 cubic centimeters",
            "ja": "B. 150立方センチメートル",
            "ko": "B. 150 세제곱센티미터",
            "zh-CN": "B. 150 立方厘米"
          },
          {
            "zh-HK": "C. 200 立方厘米",
            "en": "C. 200 cubic centimeters",
            "ja": "C. 200立方センチメートル",
            "ko": "C. 200 세제곱센티미터",
            "zh-CN": "C. 200 立方厘米"
          },
          {
            "zh-HK": "D. 250 立方厘米",
            "en": "D. 250 cubic centimeters",
            "ja": "D. 250立方センチメートル",
            "ko": "D. 250 세제곱센티미터",
            "zh-CN": "D. 250 立方厘米"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "English Mathematics",
          "en": "English Mathematics",
          "ja": "英語数学",
          "ko": "영어 수학",
          "zh-CN": "英语数学"
        },
        "question": {
          "zh-HK": "\"A number's 25% is 50. What is the number?\"",
          "en": "A number's 25% is 50. What is the number?",
          "ja": "ある数の25%は50です。その数は何ですか？",
          "ko": "어떤 수의 25%는 50입니다. 그 수는 무엇입니까?",
          "zh-CN": "一个数的25%是50。这个数是多少？"
        },
        "options": [
          {
            "zh-HK": "A. 100",
            "en": "A. 100",
            "ja": "A. 100",
            "ko": "A. 100",
            "zh-CN": "A. 100"
          },
          {
            "zh-HK": "B. 150",
            "en": "B. 150",
            "ja": "B. 150",
            "ko": "B. 150",
            "zh-CN": "B. 150"
          },
          {
            "zh-HK": "C. 200",
            "en": "C. 200",
            "ja": "C. 200",
            "ko": "C. 200",
            "zh-CN": "C. 200"
          },
          {
            "zh-HK": "D. 250",
            "en": "D. 250",
            "ja": "D. 250",
            "ko": "D. 250",
            "zh-CN": "D. 250"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "「排比」修辭手法的特點是什麼？",
          "en": "What are the characteristics of the rhetorical device \"parallelism\"?",
          "ja": "修辞技法「排比」の特徴は何ですか？",
          "ko": "수사법 \"배비\"의 특징은 무엇입니까?",
          "zh-CN": "“排比”修辞手法的特点是什么？"
        },
        "options": [
          {
            "zh-HK": "A. 重複使用相同的句式",
            "en": "A. Repeatedly using the same sentence structure",
            "ja": "A. 同じ文型を繰り返し使用する",
            "ko": "A. 동일한 문장 구조를 반복적으로 사용",
            "zh-CN": "A. 重复使用相同的句式"
          },
          {
            "zh-HK": "B. 誇大事實",
            "en": "B. Exaggerating facts",
            "ja": "B. 事実を誇張する",
            "ko": "B. 사실을 과장함",
            "zh-CN": "B. 夸大事实"
          },
          {
            "zh-HK": "C. 擬人化",
            "en": "C. Personification",
            "ja": "C. 擬人化",
            "ko": "C. 의인화",
            "zh-CN": "C. 拟人化"
          },
          {
            "zh-HK": "D. 直接比較",
            "en": "D. Direct comparison",
            "ja": "D. 直接比較",
            "ko": "D. 직접 비교",
            "zh-CN": "D. 直接比较"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 12,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "文言文",
          "ko": "문언문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「者」在文言文中通常表示什麼？",
          "en": "What does \"者\" (zhě) usually indicate in Classical Chinese?",
          "ja": "文言文において、「者」は通常何を表しますか？",
          "ko": "문언문에서 '者'는 보통 무엇을 나타냅니까?",
          "zh-CN": "“者”在文言文中通常表示什么？"
        },
        "options": [
          {
            "zh-HK": "A. 地方",
            "en": "A. Place",
            "ja": "A. 場所",
            "ko": "A. 장소",
            "zh-CN": "A. 地方"
          },
          {
            "zh-HK": "B. 時間",
            "en": "B. Time",
            "ja": "B. 時間",
            "ko": "B. 시간",
            "zh-CN": "B. 时间"
          },
          {
            "zh-HK": "C. 人或事物",
            "en": "C. Person or thing",
            "ja": "C. 人または物事",
            "ko": "C. 사람 또는 사물",
            "zh-CN": "C. 人或事物"
          },
          {
            "zh-HK": "D. 動作",
            "en": "D. Action",
            "ja": "D. 動作",
            "ko": "D. 동작",
            "zh-CN": "D. 动作"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 13,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英语"
        },
        "question": {
          "zh-HK": "\"Despite _____ hard, he didn't pass the exam.\"",
          "en": "Despite _____ hard, he didn't pass the exam.",
          "ja": "_____ 一生懸命にもかかわらず、彼は試験に合格しませんでした。",
          "ko": "_____ 열심히 노력했음에도 불구하고, 그는 시험에 합격하지 못했습니다.",
          "zh-CN": "尽管 _____ 努力，他还是没有通过考试。"
        },
        "options": [
          {
            "en": "A. study",
            "ja": "A. 勉強する",
            "ko": "A. 공부하다",
            "zh-CN": "A. 学习",
            "zh-HK": "A. 学习"
          },
          {
            "en": "B. studying",
            "ja": "B. 勉強すること",
            "ko": "B. 공부하는 것",
            "zh-CN": "B. 学习",
            "zh-HK": "B. 学习"
          },
          {
            "en": "C. to study",
            "ja": "C. 勉強するために",
            "ko": "C. 공부하기 위해",
            "zh-CN": "C. 去学习",
            "zh-HK": "C. 去学习"
          },
          {
            "en": "D. studied",
            "ja": "D. 勉強した",
            "ko": "D. 공부했다",
            "zh-CN": "D. 学习了",
            "zh-HK": "D. 学习了"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 14,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "一個數的 25% 是 50，這個數是多少？",
          "en": "25% of a number is 50. What is the number?",
          "ja": "ある数の25%が50です。その数はいくつですか？",
          "ko": "어떤 수의 25%가 50입니다. 그 수는 얼마입니까?",
          "zh-CN": "一个数的 25% 是 50，这个数是多少？"
        },
        "options": [
          {
            "zh-HK": "A. 100",
            "en": "A. 100",
            "ja": "A. 100",
            "ko": "A. 100",
            "zh-CN": "A. 100"
          },
          {
            "zh-HK": "B. 150",
            "en": "B. 150",
            "ja": "B. 150",
            "ko": "B. 150",
            "zh-CN": "B. 150"
          },
          {
            "zh-HK": "C. 200",
            "en": "C. 200",
            "ja": "C. 200",
            "ko": "C. 200",
            "zh-CN": "C. 200"
          },
          {
            "zh-HK": "D. 250",
            "en": "D. 250",
            "ja": "D. 250",
            "ko": "D. 250",
            "zh-CN": "D. 250"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 15,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "英語数学",
          "ko": "영어 수학",
          "zh-CN": "英语数学"
        },
        "question": {
          "zh-HK": "\"If you have $100 and spend 30%, how much is left?\"",
          "en": "If you have $100 and spend 30%, how much is left?",
          "ja": "100ドル持っていて30％使ったら、いくら残りますか？",
          "ko": "100달러가 있고 30%를 사용했다면, 얼마가 남았나요?",
          "zh-CN": "如果你有100美元并花费了30%，还剩下多少？"
        },
        "options": [
          {
            "zh-HK": "A. $60",
            "en": "A. $60",
            "ja": "A. 60ドル",
            "ko": "A. 60달러",
            "zh-CN": "A. 60美元"
          },
          {
            "zh-HK": "B. $70",
            "en": "B. $70",
            "ja": "B. 70ドル",
            "ko": "B. 70달러",
            "zh-CN": "B. 70美元"
          },
          {
            "zh-HK": "C. $80",
            "en": "C. $80",
            "ja": "C. 80ドル",
            "ko": "C. 80달러",
            "zh-CN": "C. 80美元"
          },
          {
            "zh-HK": "D. $90",
            "en": "D. $90",
            "ja": "D. 90ドル",
            "ko": "D. 90달러",
            "zh-CN": "D. 90美元"
          }
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "grade": "p2",
    "gradeLabel": {
      "zh-HK": "小二",
      "en": "Grade 2",
      "ja": "小学2年",
      "ko": "초등학교 2학년",
      "zh-CN": "小学二年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "找出句子中的錯別字：「妹妹在公完裏開心地玩耍。」\n選項: A. 妹, B. 完, C. 裏, D. 耍\n正確答案索引: 1",
          "en": "Find the incorrect character in the sentence: \"My sister is happily playing in the park.\"",
          "ja": "文中の間違った漢字を見つけなさい：「妹は公園で楽しく遊んでいます。」",
          "ko": "문장에서 틀린 글자를 찾으시오: \"여동생이 공원에서 즐겁게 놀고 있습니다.\"",
          "zh-CN": "找出句子中的错别字：\"妹妹在公园里开心地玩耍。\""
        },
        "options": [
          {
            "zh-HK": "妹",
            "en": "妹 (younger sister)",
            "ja": "妹 (いもうと)",
            "ko": "妹 (여동생)",
            "zh-CN": "妹"
          },
          {
            "zh-HK": "完",
            "en": "完 (complete, finish)",
            "ja": "完 (かん)",
            "ko": "完 (완)",
            "zh-CN": "完"
          },
          {
            "zh-HK": "裏",
            "en": "裏 (inside, back)",
            "ja": "裏 (うら)",
            "ko": "裏 (뒤, 안)",
            "zh-CN": "里"
          },
          {
            "zh-HK": "耍",
            "en": "耍 (play, wield)",
            "ja": "耍 (もてあそぶ)",
            "ko": "耍 (희롱하다)",
            "zh-CN": "耍"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "哪一個字的部首與「河」字相同？\n選項: A. 可, B. 汗, C. 奇, D. 何\n正確答案索引: 1",
          "en": "Which character has the same radical as \"河\"?",
          "ja": "どの漢字が「河」と同じ部首を持っていますか？",
          "ko": "어떤 한자가 \"河\"와 같은 부수를 가지고 있습니까?",
          "zh-CN": "哪一个字的部首与“河”字相同？"
        },
        "options": [
          {
            "zh-HK": "A. 可",
            "en": "A. Ke",
            "ja": "A. 可",
            "ko": "A. 가",
            "zh-CN": "A. 可"
          },
          {
            "zh-HK": "B. 汗",
            "en": "B. Han",
            "ja": "B. 汗",
            "ko": "B. 한",
            "zh-CN": "B. 汗"
          },
          {
            "zh-HK": "C. 奇",
            "en": "C. Qi",
            "ja": "C. 奇",
            "ko": "C. 기",
            "zh-CN": "C. 奇"
          },
          {
            "zh-HK": "D. 何",
            "en": "D. He",
            "ja": "D. 何",
            "ko": "D. 하",
            "zh-CN": "D. 何"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "選擇適當的量詞：「天上有一（ ）新月。」\n選項: A. 把, B. 條, C. 彎, D. 輪\n正確答案索引: 2",
          "en": "Choose the appropriate measure word: \"There is a ( ) new moon in the sky.\"",
          "ja": "適切な量詞を選びなさい：「空に（ ）新月がある。」",
          "ko": "적절한 양사를 선택하세요: \"하늘에 ( ) 초승달이 있다.\"",
          "zh-CN": "选择适当的量词：“天上有一（ ）新月。”"
        },
        "options": [
          {
            "zh-HK": "把",
            "en": "Ba (measure word for objects with handles, or a handful)",
            "ja": "把 (ば - measure word for things with handles, or a handful)",
            "ko": "바 (잡을 수 있는 물건이나 한 줌을 세는 양사)",
            "zh-CN": "把"
          },
          {
            "zh-HK": "條",
            "en": "Tiao (measure word for long, narrow objects)",
            "ja": "条 (じょう - measure word for long, narrow objects)",
            "ko": "탸오 (길고 좁은 물건을 세는 양사)",
            "zh-CN": "条"
          },
          {
            "zh-HK": "彎",
            "en": "Wan (measure word for crescent-shaped objects, or a bend)",
            "ja": "彎 (わん - measure word for crescent-shaped objects, or a bend)",
            "ko": "완 (초승달 모양의 물건이나 굽은 것을 세는 양사)",
            "zh-CN": "弯"
          },
          {
            "zh-HK": "輪",
            "en": "Lun (measure word for round objects, or a round)",
            "ja": "輪 (りん - measure word for round objects, or a round)",
            "ko": "룬 (둥근 물건이나 한 바퀴를 세는 양사)",
            "zh-CN": "轮"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「學而時習之，不亦說乎？」中「說」的意思是什麼？\n選項: A. 說話, B. 高興, C. 解釋, D. 講述\n正確答案索引: 1",
          "en": "What is the meaning of \"說\" in \"Is it not delightful to learn and practice what you have learned from time to time?\"",
          "ja": "「学んで時に之を習う、亦説ばしからずや？」における「説」の意味は何ですか？",
          "ko": "\"배우고 때때로 그것을 익히니 또한 기쁘지 아니한가?\"에서 \"說\"의 의미는 무엇입니까?",
          "zh-CN": "“学而时习之，不亦说乎？”中“说”的意思是什么？"
        },
        "options": [
          {
            "zh-HK": "說話",
            "en": "Speak",
            "ja": "話す",
            "ko": "말하다",
            "zh-CN": "说话"
          },
          {
            "zh-HK": "高興",
            "en": "Happy",
            "ja": "嬉しい",
            "ko": "기쁘다",
            "zh-CN": "高兴"
          },
          {
            "zh-HK": "解釋",
            "en": "Explain",
            "ja": "説明する",
            "ko": "설명하다",
            "zh-CN": "解释"
          },
          {
            "zh-HK": "講述",
            "en": "Narrate",
            "ja": "語る",
            "ko": "이야기하다",
            "zh-CN": "讲述"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "한문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「有朋自遠方來，不亦樂乎？」這句話出自哪部經典？\n選項: A. 《孟子》, B. 《論語》, C. 《詩經》, D. 《楚辭》\n正確答案索引: 1",
          "en": "\"Is it not delightful to have friends coming from distant quarters?\" From which classic work does this quote come?",
          "ja": "「朋あり遠方より来たる、亦た楽しからずや？」この言葉はどの古典から来ていますか？",
          "ko": "\"벗이 먼 곳으로부터 찾아오니, 또한 즐겁지 아니한가?\" 이 구절은 어느 고전에서 유래했습니까?",
          "zh-CN": "“有朋自远方来，不亦乐乎？”这句话出自哪部经典？"
        },
        "options": [
          {
            "zh-HK": "《孟子》",
            "en": "Mencius",
            "ja": "孟子",
            "ko": "맹자",
            "zh-CN": "《孟子》"
          },
          {
            "zh-HK": "《論語》",
            "en": "The Analects of Confucius",
            "ja": "論語",
            "ko": "논어",
            "zh-CN": "《论语》"
          },
          {
            "zh-HK": "《詩經》",
            "en": "Classic of Poetry",
            "ja": "詩経",
            "ko": "시경",
            "zh-CN": "《诗经》"
          },
          {
            "zh-HK": "《楚辭》",
            "en": "Songs of Chu",
            "ja": "楚辞",
            "ko": "초사",
            "zh-CN": "《楚辞》"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英文"
        },
        "question": {
          "zh-HK": "Choose the correct word: \"I have an _____.\"\n選項: A. book, B. umbrella, C. pen, D. ruler\n正確答案索引: 1",
          "en": "Choose the correct word: \"I have an _____.\"",
          "ja": "正しい単語を選びなさい：「私は_____を持っています。」",
          "ko": "올바른 단어를 선택하세요: \"저는 _____을 가지고 있습니다.\"",
          "zh-CN": "选择正确的单词：“我有一个_____。”"
        },
        "options": [
          {
            "zh-HK": "book",
            "en": "book",
            "ja": "本",
            "ko": "책",
            "zh-CN": "书"
          },
          {
            "zh-HK": "umbrella",
            "en": "umbrella",
            "ja": "傘",
            "ko": "우산",
            "zh-CN": "雨伞"
          },
          {
            "zh-HK": "pen",
            "en": "pen",
            "ja": "ペン",
            "ko": "펜",
            "zh-CN": "钢笔"
          },
          {
            "zh-HK": "ruler",
            "en": "ruler",
            "ja": "定規",
            "ko": "자",
            "zh-CN": "尺子"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英文"
        },
        "question": {
          "zh-HK": "Which word is a color?\n選項: A. Table, B. Purple, C. Happy, D. Jump\n正確答案索引: 1",
          "en": "Which word is a color?",
          "ja": "どの単語が色ですか？",
          "ko": "어떤 단어가 색깔인가요?",
          "zh-CN": "哪个单词是颜色？"
        },
        "options": [
          {
            "zh-HK": "Table",
            "en": "Table",
            "ja": "テーブル",
            "ko": "테이블",
            "zh-CN": "桌子"
          },
          {
            "zh-HK": "Purple",
            "en": "Purple",
            "ja": "紫",
            "ko": "보라색",
            "zh-CN": "紫色"
          },
          {
            "zh-HK": "Happy",
            "en": "Happy",
            "ja": "幸せ",
            "ko": "행복한",
            "zh-CN": "快乐"
          },
          {
            "zh-HK": "Jump",
            "en": "Jump",
            "ja": "ジャンプ",
            "ko": "점프",
            "zh-CN": "跳跃"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "18 + 7 - 5 = ?\n選項: A. 20, B. 22, C. 24, D. 25\n正確答案索引: 0",
          "en": "18 + 7 - 5 = ?",
          "ja": "18 + 7 - 5 = ?",
          "ko": "18 + 7 - 5 = ?",
          "zh-CN": "18 + 7 - 5 = ?"
        },
        "options": [
          {
            "zh-HK": "A. 20",
            "en": "A. 20",
            "ja": "A. 20",
            "ko": "A. 20",
            "zh-CN": "A. 20"
          },
          {
            "zh-HK": "B. 22",
            "en": "B. 22",
            "ja": "B. 22",
            "ko": "B. 22",
            "zh-CN": "B. 22"
          },
          {
            "zh-HK": "C. 24",
            "en": "C. 24",
            "ja": "C. 24",
            "ko": "C. 24",
            "zh-CN": "C. 24"
          },
          {
            "zh-HK": "D. 25",
            "en": "D. 25",
            "ja": "D. 25",
            "ko": "D. 25",
            "zh-CN": "D. 25"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "小明有 15 粒糖，吃了 4 粒，媽媽又給了他 3 粒，他現在有多少粒糖？\n選項: A. 11, B. 14, C. 18, D. 22\n正確答案索引: 1",
          "en": "Xiaoming has 15 candies, ate 4, and his mother gave him 3 more. How many candies does he have now?",
          "ja": "小明は15個のキャンディを持っていて、4個食べて、お母さんがさらに3個くれました。今、小明は何個のキャンディを持っていますか？",
          "ko": "샤오밍은 사탕 15개가 있었는데 4개를 먹고 엄마가 3개를 더 주셨습니다. 지금 샤오밍이 가진 사탕은 몇 개입니까?",
          "zh-CN": "小明有15粒糖，吃了4粒，妈妈又给了他3粒，他现在有多少粒糖？"
        },
        "options": [
          {
            "zh-HK": "11",
            "en": "11",
            "ja": "11",
            "ko": "11",
            "zh-CN": "11"
          },
          {
            "zh-HK": "14",
            "en": "14",
            "ja": "14",
            "ko": "14",
            "zh-CN": "14"
          },
          {
            "zh-HK": "18",
            "en": "18",
            "ja": "18",
            "ko": "18",
            "zh-CN": "18"
          },
          {
            "zh-HK": "22",
            "en": "22",
            "ja": "22",
            "ko": "22",
            "zh-CN": "22"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "英語数学",
          "ko": "영어 수학",
          "zh-CN": "英语数学"
        },
        "question": {
          "zh-HK": "\"How many _____ are there in the box?\" (There are 5 toys.)\n選項: A. toy, B. toys, C. a toy, D. toyes\n正確答案索引: 1",
          "en": "\"How many _____ are there in the box?\" (There are 5 toys.)",
          "ja": "「箱の中に_____がいくつありますか？」 (おもちゃが5つあります。)",
          "ko": "\"상자 안에 _____가 몇 개 있습니까?\" (장난감이 5개 있습니다.)",
          "zh-CN": "\"盒子里有多少个_____？\" (有5个玩具。)"
        },
        "options": [
          {
            "en": "toy",
            "ja": "おもちゃ",
            "ko": "장난감",
            "zh-CN": "玩具",
            "zh-HK": "玩具"
          },
          {
            "en": "toys",
            "ja": "おもちゃ",
            "ko": "장난감",
            "zh-CN": "玩具",
            "zh-HK": "玩具"
          },
          {
            "en": "a toy",
            "ja": "一つのおもちゃ",
            "ko": "장난감 하나",
            "zh-CN": "一个玩具",
            "zh-HK": "一个玩具"
          },
          {
            "en": "toyes",
            "ja": "おもちゃ (不正確)",
            "ko": "장난감 (부정확)",
            "zh-CN": "玩具 (不正确)",
            "zh-HK": "玩具 (不正确)"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "语文"
        },
        "question": {
          "zh-HK": "哪一個字的筆畫最少？\n選項: A. 一, B. 人, C. 大, D. 天\n正確答案索引: 0",
          "en": "Which character has the fewest strokes?",
          "ja": "画数が最も少ない漢字はどれですか？",
          "ko": "어떤 한자의 획수가 가장 적습니까?",
          "zh-CN": "哪个字的笔画最少？"
        },
        "options": [
          {
            "zh-HK": "A. 一",
            "en": "A. One",
            "ja": "A. 一",
            "ko": "A. 일",
            "zh-CN": "A. 一"
          },
          {
            "zh-HK": "B. 人",
            "en": "B. Person",
            "ja": "B. 人",
            "ko": "B. 인",
            "zh-CN": "B. 人"
          },
          {
            "zh-HK": "C. 大",
            "en": "C. Big",
            "ja": "C. 大",
            "ko": "C. 대",
            "zh-CN": "C. 大"
          },
          {
            "zh-HK": "D. 天",
            "en": "D. Sky",
            "ja": "D. 天",
            "ko": "D. 천",
            "zh-CN": "D. 天"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "找出句子中的錯別字：「妹妹在公完裏開心地玩耍。」",
          "en": "Find the incorrect character in the sentence: '妹妹在公完裏開心地玩耍。'",
          "ja": "文中の誤字を見つけなさい：「妹妹在公完裏開心地玩耍。」",
          "ko": "문장에서 틀린 글자를 찾으시오: '妹妹在公完裏開心地玩耍。'",
          "zh-CN": "找出句子中的错别字：「妹妹在公完里开心地玩耍。」"
        },
        "options": [
          {
            "zh-HK": "A. 妹",
            "en": "A. 妹 (mèi)",
            "ja": "A. 妹 (いもうと)",
            "ko": "A. 妹 (mèi)",
            "zh-CN": "A. 妹"
          },
          {
            "zh-HK": "B. 完",
            "en": "B. 完 (wán)",
            "ja": "B. 完 (かん)",
            "ko": "B. 完 (wán)",
            "zh-CN": "B. 完"
          },
          {
            "zh-HK": "C. 裏",
            "en": "C. 裏 (lǐ)",
            "ja": "C. 裏 (うら)",
            "ko": "C. 裏 (lǐ)",
            "zh-CN": "C. 里"
          },
          {
            "zh-HK": "D. 耍",
            "en": "D. 耍 (shuǎ)",
            "ja": "D. 耍 (あそぶ)",
            "ko": "D. 耍 (shuǎ)",
            "zh-CN": "D. 耍"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "哪一個字的部首與「河」字相同？",
          "en": "Which character has the same radical as the character '河'?",
          "ja": "「河」という漢字と同じ部首を持つ漢字はどれですか？",
          "ko": "'河' 자와 부수가 같은 글자는 무엇입니까?",
          "zh-CN": "哪一个字的部首与“河”字相同？"
        },
        "options": [
          {
            "en": "可",
            "ja": "可",
            "ko": "可",
            "zh-CN": "可",
            "zh-HK": "可"
          },
          {
            "en": "汗",
            "ja": "汗",
            "ko": "汗",
            "zh-CN": "汗",
            "zh-HK": "汗"
          },
          {
            "en": "奇",
            "ja": "奇",
            "ko": "奇",
            "zh-CN": "奇",
            "zh-HK": "奇"
          },
          {
            "en": "何",
            "ja": "何",
            "ko": "何",
            "zh-CN": "何",
            "zh-HK": "何"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "選擇適當的量詞：「天上有一（ ）新月。」",
          "en": "Choose the appropriate measure word: \"There is a ( ) crescent moon in the sky.\"",
          "ja": "適切な量詞を選びなさい：「空に（ ）の三日月があります。」",
          "ko": "적절한 양사를 고르시오: \"하늘에 ( ) 초승달이 있습니다.\"",
          "zh-CN": "选择适当的量词：「天空中有一（ ）新月。」"
        },
        "options": [
          {
            "en": "A. Ba (measure word for objects with handles)",
            "ja": "A. 把 (ba)",
            "ko": "A. 바 (ba)",
            "zh-CN": "A. 把",
            "zh-HK": "A. 把"
          },
          {
            "en": "B. Tiao (measure word for long, narrow objects)",
            "ja": "B. 条 (tiao)",
            "ko": "B. 탸오 (tiao)",
            "zh-CN": "B. 条",
            "zh-HK": "B. 条"
          },
          {
            "en": "C. Wan (measure word for curved objects)",
            "ja": "C. 弯 (wan)",
            "ko": "C. 완 (wan)",
            "zh-CN": "C. 弯",
            "zh-HK": "C. 弯"
          },
          {
            "en": "D. Lun (measure word for round objects)",
            "ja": "D. 輪 (lun)",
            "ko": "D. 룬 (lun)",
            "zh-CN": "D. 轮",
            "zh-HK": "D. 轮"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "한문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「學而時習之，不亦說乎？」中「說」的意思是什麼？",
          "en": "In \"Is it not a pleasure to learn and practice what you have learned?\", what does \"說\" (yuè) mean?",
          "ja": "「学而時習之、不亦説乎？」における「説」の意味は何ですか？",
          "ko": "「학이시습지 불역열호?」에서 「설」의 의미는 무엇입니까?",
          "zh-CN": "「学而时习之，不亦说乎？」中「说」的意思是什么？"
        },
        "options": [
          {
            "zh-HK": "A. 說話",
            "en": "A. To speak",
            "ja": "A. 話す",
            "ko": "A. 말하다",
            "zh-CN": "A. 说话"
          },
          {
            "zh-HK": "B. 高興",
            "en": "B. Happy",
            "ja": "B. 嬉しい",
            "ko": "B. 기쁘다",
            "zh-CN": "B. 高兴"
          },
          {
            "zh-HK": "C. 解釋",
            "en": "C. To explain",
            "ja": "C. 説明する",
            "ko": "C. 설명하다",
            "zh-CN": "C. 解释"
          },
          {
            "zh-HK": "D. 講述",
            "en": "D. To narrate",
            "ja": "D. 語る",
            "ko": "D. 이야기하다",
            "zh-CN": "D. 讲述"
          }
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "grade": "p3",
    "gradeLabel": {
      "zh-HK": "小三",
      "en": "Grade 3",
      "ja": "小学3年",
      "ko": "초등학교 3학년",
      "zh-CN": "小学三年级"
    },
    "questions": [
      {
        "id": 5,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "한문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「有朋自遠方來，不亦樂乎？」這句話出自哪部經典？",
          "en": "\"Is it not delightful to have friends coming from distant quarters?\" From which classic text does this quote originate?",
          "ja": "「朋あり遠方より来たる、亦た楽しからずや？」この言葉はどの古典から来ていますか？",
          "ko": "\"벗이 먼 곳으로부터 찾아오니, 또한 즐겁지 아니한가?\" 이 구절은 어느 고전에서 유래했습니까?",
          "zh-CN": "“有朋自远方来，不亦乐乎？”这句话出自哪部经典？"
        },
        "options": [
          {
            "zh-HK": "A. 《孟子》",
            "en": "A. Mencius",
            "ja": "A. 『孟子』",
            "ko": "A. 『맹자』",
            "zh-CN": "A. 《孟子》"
          },
          {
            "zh-HK": "B. 《論語》",
            "en": "B. The Analects",
            "ja": "B. 『論語』",
            "ko": "B. 『논어』",
            "zh-CN": "B. 《论语》"
          },
          {
            "zh-HK": "C. 《詩經》",
            "en": "C. Book of Odes",
            "ja": "C. 『詩経』",
            "ko": "C. 『시경』",
            "zh-CN": "C. 《诗经》"
          },
          {
            "zh-HK": "D. 《楚辭》",
            "en": "D. Songs of Chu",
            "ja": "D. 『楚辞』",
            "ko": "D. 『초사』",
            "zh-CN": "D. 《楚辞》"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英文"
        },
        "question": {
          "zh-HK": "Choose the correct word: \"I have an _____.",
          "en": "Choose the correct word: \"I have an _____.\"",
          "ja": "正しい単語を選びなさい：「私は_____を持っています。」",
          "ko": "올바른 단어를 선택하세요: \"저는 _____을 가지고 있습니다.\"",
          "zh-CN": "选择正确的单词：“我有一个_____。”"
        },
        "options": [
          {
            "zh-HK": "A. book",
            "en": "A. book",
            "ja": "A. 本",
            "ko": "A. 책",
            "zh-CN": "A. 书"
          },
          {
            "zh-HK": "B. umbrella",
            "en": "B. umbrella",
            "ja": "B. 傘",
            "ko": "B. 우산",
            "zh-CN": "B. 雨伞"
          },
          {
            "zh-HK": "C. pen",
            "en": "C. pen",
            "ja": "C. ペン",
            "ko": "C. 펜",
            "zh-CN": "C. 钢笔"
          },
          {
            "zh-HK": "D. ruler",
            "en": "D. ruler",
            "ja": "D. 定規",
            "ko": "D. 자",
            "zh-CN": "D. 尺子"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英语"
        },
        "question": {
          "zh-HK": "Which word is a color?",
          "en": "Which word is a color?",
          "ja": "どの単語が色ですか？",
          "ko": "어떤 단어가 색깔인가요?",
          "zh-CN": "哪个词是颜色？"
        },
        "options": [
          {
            "zh-HK": "A. Table",
            "en": "A. Table",
            "ja": "A. テーブル",
            "ko": "A. 테이블",
            "zh-CN": "A. 桌子"
          },
          {
            "zh-HK": "B. Purple",
            "en": "B. Purple",
            "ja": "B. 紫",
            "ko": "B. 보라색",
            "zh-CN": "B. 紫色"
          },
          {
            "zh-HK": "C. Happy",
            "en": "C. Happy",
            "ja": "C. 幸せ",
            "ko": "C. 행복한",
            "zh-CN": "C. 快乐"
          },
          {
            "zh-HK": "D. Jump",
            "en": "D. Jump",
            "ja": "D. ジャンプ",
            "ko": "D. 점프",
            "zh-CN": "D. 跳"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "18 + 7 - 5 = ?",
          "en": "18 + 7 - 5 = ?",
          "ja": "18 + 7 - 5 = ?",
          "ko": "18 + 7 - 5 = ?",
          "zh-CN": "18 + 7 - 5 = ?"
        },
        "options": [
          {
            "zh-HK": "A. 20",
            "en": "A. 20",
            "ja": "A. 20",
            "ko": "A. 20",
            "zh-CN": "A. 20"
          },
          {
            "zh-HK": "B. 22",
            "en": "B. 22",
            "ja": "B. 22",
            "ko": "B. 22",
            "zh-CN": "B. 22"
          },
          {
            "zh-HK": "C. 24",
            "en": "C. 24",
            "ja": "C. 24",
            "ko": "C. 24",
            "zh-CN": "C. 24"
          },
          {
            "zh-HK": "D. 25",
            "en": "D. 25",
            "ja": "D. 25",
            "ko": "D. 25",
            "zh-CN": "D. 25"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "小明有 15 粒糖，吃了 4 粒，媽媽又給了他 3 粒，他現在有多少粒糖？",
          "en": "Xiao Ming had 15 candies, ate 4, and his mother gave him 3 more. How many candies does he have now?",
          "ja": "シャオミンは15個のキャンディーを持っていましたが、4個食べ、母親がさらに3個与えました。彼は今何個のキャンディーを持っていますか？",
          "ko": "샤오밍은 사탕 15개를 가지고 있었는데, 4개를 먹고 엄마가 3개를 더 주었습니다. 그는 지금 몇 개의 사탕을 가지고 있습니까?",
          "zh-CN": "小明有15粒糖，吃了4粒，妈妈又给了他3粒，他现在有多少粒糖？"
        },
        "options": [
          {
            "zh-HK": "A. 11",
            "en": "A. 11",
            "ja": "A. 11",
            "ko": "A. 11",
            "zh-CN": "A. 11"
          },
          {
            "zh-HK": "B. 14",
            "en": "B. 14",
            "ja": "B. 14",
            "ko": "B. 14",
            "zh-CN": "B. 14"
          },
          {
            "zh-HK": "C. 18",
            "en": "C. 18",
            "ja": "C. 18",
            "ko": "C. 18",
            "zh-CN": "C. 18"
          },
          {
            "zh-HK": "D. 22",
            "en": "D. 22",
            "ja": "D. 22",
            "ko": "D. 22",
            "zh-CN": "D. 22"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "English Mathematics",
          "en": "English Mathematics",
          "ja": "英語数学",
          "ko": "영어 수학",
          "zh-CN": "英语数学"
        },
        "question": {
          "zh-HK": "\"How many _____ are there in the box?\" (There are 5 toys.)",
          "en": "How many _____ are there in the box? (There are 5 toys.)",
          "ja": "箱の中に_____がいくつありますか？ (おもちゃが5つあります。)",
          "ko": "상자 안에 _____가 몇 개 있습니까? (장난감이 5개 있습니다.)",
          "zh-CN": "盒子里有多少个_____？ (有5个玩具。)"
        },
        "options": [
          {
            "zh-HK": "A. toy",
            "en": "A. toy",
            "ja": "A. おもちゃ",
            "ko": "A. 장난감",
            "zh-CN": "A. 玩具"
          },
          {
            "zh-HK": "B. toys",
            "en": "B. toys",
            "ja": "B. おもちゃ",
            "ko": "B. 장난감",
            "zh-CN": "B. 玩具"
          },
          {
            "zh-HK": "C. a toy",
            "en": "C. a toy",
            "ja": "C. 一つのおもちゃ",
            "ko": "C. 장난감 하나",
            "zh-CN": "C. 一个玩具"
          },
          {
            "zh-HK": "D. toyes",
            "en": "D. toyes",
            "ja": "D. おもちゃ",
            "ko": "D. 장난감",
            "zh-CN": "D. 玩具"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "哪一個字的筆畫最少？",
          "en": "Which character has the fewest strokes?",
          "ja": "どの字の画数が最も少ないですか？",
          "ko": "어떤 글자의 획수가 가장 적습니까?",
          "zh-CN": "哪一个字的笔画最少？"
        },
        "options": [
          {
            "zh-HK": "A. 一",
            "en": "A. 一",
            "ja": "A. 一",
            "ko": "A. 일",
            "zh-CN": "A. 一"
          },
          {
            "zh-HK": "B. 人",
            "en": "B. 人",
            "ja": "B. 人",
            "ko": "B. 인",
            "zh-CN": "B. 人"
          },
          {
            "zh-HK": "C. 大",
            "en": "C. 大",
            "ja": "C. 大",
            "ko": "C. 대",
            "zh-CN": "C. 大"
          },
          {
            "zh-HK": "D. 天",
            "en": "D. 天",
            "ja": "D. 天",
            "ko": "D. 천",
            "zh-CN": "D. 天"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "",
          "en": "Identify the incorrect character in the sentence: '妹妹在公完裏開心地玩耍。'",
          "ja": "文中の誤字を見つけなさい：「妹妹在公完裏開心地玩耍。」",
          "ko": "문장에서 틀린 글자를 찾으시오: '妹妹在公完裏開心地玩耍.'",
          "zh-CN": "找出句子中的错别字：「妹妹在公完里开心地玩耍。」"
        },
        "options": [
          {
            "zh-HK": "A. 妹",
            "en": "A. 妹",
            "ja": "A. 妹",
            "ko": "A. 妹",
            "zh-CN": "A. 妹"
          },
          {
            "zh-HK": "B. 完",
            "en": "B. 完",
            "ja": "B. 完",
            "ko": "B. 完",
            "zh-CN": "B. 完"
          },
          {
            "zh-HK": "C. 裏",
            "en": "C. 裏",
            "ja": "C. 裏",
            "ko": "C. 裏",
            "zh-CN": "C. 里"
          },
          {
            "zh-HK": "D. 耍",
            "en": "D. 耍",
            "ja": "D. 耍",
            "ko": "D. 耍",
            "zh-CN": "D. 耍"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "",
          "en": "Which character has the same radical as \"河\"?",
          "ja": "「河」と同じ部首を持つ漢字はどれですか？",
          "ko": "\"河\"와 같은 부수를 가진 한자는 무엇입니까?",
          "zh-CN": "哪个字的部首与“河”字相同？"
        },
        "options": [
          {
            "zh-HK": "A. 可",
            "en": "A. 可",
            "ja": "A. 可",
            "ko": "A. 可",
            "zh-CN": "A. 可"
          },
          {
            "zh-HK": "B. 汗",
            "en": "B. 汗",
            "ja": "B. 汗",
            "ko": "B. 汗",
            "zh-CN": "B. 汗"
          },
          {
            "zh-HK": "C. 奇",
            "en": "C. 奇",
            "ja": "C. 奇",
            "ko": "C. 奇",
            "zh-CN": "C. 奇"
          },
          {
            "zh-HK": "D. 何",
            "en": "D. 何",
            "ja": "D. 何",
            "ko": "D. 何",
            "zh-CN": "D. 何"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "",
          "en": "Choose the appropriate measure word: 'There is a ( ) new moon in the sky.'",
          "ja": "適切な助数詞を選びなさい：「空には（ ）の三日月がある。」",
          "ko": "적절한 양사를 선택하세요: '하늘에 ( ) 초승달이 있다.'",
          "zh-CN": "选择适当的量词：「天上有一（ ）新月。」"
        },
        "options": [
          {
            "zh-HK": "A. 把",
            "en": "A. Ba",
            "ja": "A. 把",
            "ko": "A. 바",
            "zh-CN": "A. 把"
          },
          {
            "zh-HK": "B. 條",
            "en": "B. Tiao",
            "ja": "B. 条",
            "ko": "B. 탸오",
            "zh-CN": "B. 条"
          },
          {
            "zh-HK": "C. 彎",
            "en": "C. Wan",
            "ja": "C. 弯",
            "ko": "C. 완",
            "zh-CN": "C. 弯"
          },
          {
            "zh-HK": "D. 輪",
            "en": "D. Lun",
            "ja": "D. 輪",
            "ko": "D. 룬",
            "zh-CN": "D. 轮"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "",
          "en": "What is the meaning of 'shuo' in the phrase 'Is it not pleasant to learn with a constant perseverance and application?'",
          "ja": "「学而時習之、亦説乎？」の「説」の意味は何ですか？",
          "ko": "「학이시습지 불역열호?」에서 「열」의 의미는 무엇입니까?",
          "zh-CN": "「学而时习之，不亦说乎？」中「说」的意思是什么？"
        },
        "options": [
          {
            "en": "A. say",
            "ja": "A. 言う",
            "ko": "A. 말하다",
            "zh-CN": "A. 说话",
            "zh-HK": "A. 说话"
          },
          {
            "en": "B. Happy",
            "ja": "B. ハッピー",
            "ko": "B. 행복하다",
            "zh-CN": "B. 高兴",
            "zh-HK": "B. 高兴"
          },
          {
            "en": "C. explain",
            "ja": "C. 説明する",
            "ko": "C. 설명하다",
            "zh-CN": "C. 解释",
            "zh-HK": "C. 解释"
          },
          {
            "en": "D. Tell",
            "ja": "D. 教えて",
            "ko": "D. 말하다",
            "zh-CN": "D. 讲述",
            "zh-HK": "D. 讲述"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "",
          "en": "\"How wonderful it is to have friends from far away?\" Which classic does this sentence come from?",
          "ja": "「遠くから友達がいるって、なんて素晴らしいことでしょう？」この文はどの古典から来ていますか?",
          "ko": "\"멀리서 친구가 있다는 건 얼마나 멋진 일인가요?\" 이 문장은 어느 고전에서 왔나요?",
          "zh-CN": "「有朋自远方来，不亦乐乎？」这句话出自哪部经典？"
        },
        "options": [
          {
            "zh-HK": "A. 《孟子》",
            "en": "A. \"Mencius\"",
            "ja": "A.「孟子」",
            "ko": "A. '맹자'",
            "zh-CN": "A. 《孟子》"
          },
          {
            "zh-HK": "B. 《論語》",
            "en": "B. \"The Analects of Confucius\"",
            "ja": "B.『論語』",
            "ko": "B. \"공자의 논어\"",
            "zh-CN": "B. 《论语》"
          },
          {
            "zh-HK": "C. 《詩經》",
            "en": "C. \"The Book of Songs\"",
            "ja": "C.「歌の本」",
            "ko": "C. \"아가서\"",
            "zh-CN": "C. 《诗经》"
          },
          {
            "zh-HK": "D. 《楚辭》",
            "en": "D. \"Chu Ci\"",
            "ja": "D.「チュー・シー」",
            "ko": "D. \"추시\"",
            "zh-CN": "D. 《楚辞》"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "",
          "en": "18 + 7 - 5 = ?",
          "ja": "18 + 7 - 5 = ?",
          "ko": "18 + 7 - 5 = ?",
          "zh-CN": "18 + 7 - 5 = ?"
        },
        "options": [
          {
            "zh-HK": "A. 20",
            "en": "A. 20",
            "ja": "A. 20",
            "ko": "A. 20",
            "zh-CN": "A. 20"
          },
          {
            "zh-HK": "B. 22",
            "en": "B. 22",
            "ja": "B. 22",
            "ko": "B. 22",
            "zh-CN": "B. 22"
          },
          {
            "zh-HK": "C. 24",
            "en": "C. 24",
            "ja": "C. 24",
            "ko": "C. 24",
            "zh-CN": "C. 24"
          },
          {
            "zh-HK": "D. 25",
            "en": "D. 25",
            "ja": "D. 25",
            "ko": "D. 25",
            "zh-CN": "D. 25"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "",
          "en": "Xiao Ming had 15 candies, ate 4, and his mother gave him 3 more. How many candies does he have now?",
          "ja": "小明は15個のキャンディーを持っていましたが、4個食べ、母親がさらに3個あげました。彼は今何個のキャンディーを持っていますか？",
          "ko": "샤오밍은 사탕 15개를 가지고 있었는데, 4개를 먹고 엄마가 3개를 더 주었습니다. 그는 지금 몇 개의 사탕을 가지고 있습니까?",
          "zh-CN": "小明有15粒糖，吃了4粒，妈妈又给了他3粒，他现在有多少粒糖？"
        },
        "options": [
          {
            "zh-HK": "A. 11",
            "en": "A. 11",
            "ja": "A. 11",
            "ko": "A. 11",
            "zh-CN": "A. 11"
          },
          {
            "zh-HK": "B. 14",
            "en": "B. 14",
            "ja": "B. 14",
            "ko": "B. 14",
            "zh-CN": "B. 14"
          },
          {
            "zh-HK": "C. 18",
            "en": "C. 18",
            "ja": "C. 18",
            "ko": "C. 18",
            "zh-CN": "C. 18"
          },
          {
            "zh-HK": "D. 22",
            "en": "D. 22",
            "ja": "D. 22",
            "ko": "D. 22",
            "zh-CN": "D. 22"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "",
          "en": "Which character has the fewest strokes?",
          "ja": "どの漢字が最も画数が少ないですか？",
          "ko": "어떤 한자가 획수가 가장 적습니까?",
          "zh-CN": "哪一个字的笔画最少？"
        },
        "options": [
          {
            "zh-HK": "A. 一",
            "en": "A. One",
            "ja": "A. 一",
            "ko": "A. 일",
            "zh-CN": "A. 一"
          },
          {
            "zh-HK": "B. 人",
            "en": "B. Person",
            "ja": "B. 人",
            "ko": "B. 인",
            "zh-CN": "B. 人"
          },
          {
            "zh-HK": "C. 大",
            "en": "C. Big",
            "ja": "C. 大",
            "ko": "C. 대",
            "zh-CN": "C. 大"
          },
          {
            "zh-HK": "D. 天",
            "en": "D. Sky",
            "ja": "D. 天",
            "ko": "D. 천",
            "zh-CN": "D. 天"
          }
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "grade": "p4",
    "gradeLabel": {
      "zh-HK": "小四",
      "en": "Grade 4",
      "ja": "小学4年",
      "ko": "초등학교 4학년",
      "zh-CN": "小学四年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "语文"
        },
        "question": {
          "zh-HK": "",
          "en": "Please select the most appropriate idiom in the following sentences.",
          "ja": "次の文の中で、最も適切な慣用句を選びなさい。",
          "ko": "다음 문장들 중에서 가장 적절한 관용구를 고르시오.",
          "zh-CN": "请选出下列句子中，哪个词语运用最恰当？"
        },
        "options": [
          {
            "zh-HK": "他的成績一落千丈。",
            "en": "His grades plummeted.",
            "ja": "彼の成績は急落した。",
            "ko": "그의 성적은 곤두박질쳤다.",
            "zh-CN": "他的成绩一落千丈。"
          },
          {
            "zh-HK": "他的成績一步登天。",
            "en": "His grades soared to the sky in one step.",
            "ja": "彼の成績は一気に天に昇った。",
            "ko": "그의 성적은 단번에 하늘로 치솟았다.",
            "zh-CN": "他的成绩一步登天。"
          },
          {
            "zh-HK": "他的成績一鳴驚人。",
            "en": "His grades were astonishing.",
            "ja": "彼の成績は驚くべきものだった。",
            "ko": "그의 성적은 놀라웠다.",
            "zh-CN": "他的成绩一鸣惊人。"
          },
          {
            "zh-HK": "他的成績一帆風順。",
            "en": "His grades were smooth sailing.",
            "ja": "彼の成績は順風満帆だった。",
            "ko": "그의 성적은 순조로웠다.",
            "zh-CN": "他的成绩一帆风顺。"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "한문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "",
          "en": "'Learning without thought is labor lost; thought without learning is perilous.' From which classic text does this quote originate?",
          "ja": "「学びて思わざれば則ち罔し、思いて学ばざれば則ち殆し」は、どの古典から出ていますか？",
          "ko": "“배우고 생각하지 않으면 얻는 것이 없고, 생각하고 배우지 않으면 위태롭다”는 어느 고전에서 유래했습니까?",
          "zh-CN": "“学而不思则罔，思而不学则殆”出自哪本典籍？"
        },
        "options": [
          {
            "zh-HK": "《孟子》",
            "en": "Mencius",
            "ja": "『孟子』",
            "ko": "『맹자』",
            "zh-CN": "《孟子》"
          },
          {
            "zh-HK": "《論語》",
            "en": "The Analects of Confucius",
            "ja": "『論語』",
            "ko": "『논어』",
            "zh-CN": "《论语》"
          },
          {
            "zh-HK": "《大學》",
            "en": "The Great Learning",
            "ja": "『大学』",
            "ko": "『대학』",
            "zh-CN": "《大学》"
          },
          {
            "zh-HK": "《中庸》",
            "en": "The Doctrine of the Mean",
            "ja": "『中庸』",
            "ko": "『중용』",
            "zh-CN": "《中庸》"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "英語",
          "ko": "영어",
          "zh-CN": "英语"
        },
        "question": {
          "zh-HK": "",
          "en": "Which sentence is grammatically correct?",
          "ja": "文法的に正しい文はどれですか？",
          "ko": "문법적으로 올바른 문장은 무엇입니까?",
          "zh-CN": "哪个句子语法正确？"
        },
        "options": [
          {
            "zh-HK": "A) She don't like apples.",
            "en": "A) She don't like apples.",
            "ja": "A) 彼女はリンゴが好きではありません。",
            "ko": "A) 그녀는 사과를 좋아하지 않습니다.",
            "zh-CN": "A) 她不喜欢苹果。"
          },
          {
            "zh-HK": "B) She doesn't likes apples.",
            "en": "B) She doesn't likes apples.",
            "ja": "B) 彼女はリンゴが好きではありません。",
            "ko": "B) 그녀는 사과를 좋아하지 않습니다.",
            "zh-CN": "B) 她不喜欢苹果。"
          },
          {
            "zh-HK": "C) She doesn't like apples.",
            "en": "C) She doesn't like apples.",
            "ja": "C) 彼女はリンゴが好きではありません。",
            "ko": "C) 그녀는 사과를 좋아하지 않습니다.",
            "zh-CN": "C) 她不喜欢苹果。"
          },
          {
            "zh-HK": "D) She not like apples.",
            "en": "D) She not like apples.",
            "ja": "D) 彼女はリンゴが好きではありません。",
            "ko": "D) 그녀는 사과를 좋아하지 않습니다.",
            "zh-CN": "D) 她不喜欢苹果。"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "",
          "en": "If the perimeter of a square is 36 cm, what is its area in square centimeters?",
          "ja": "正方形の周囲が36cmの場合、その面積は何平方センチメートルですか？",
          "ko": "정사각형의 둘레가 36cm라면, 그 면적은 몇 제곱센티미터입니까?",
          "zh-CN": "如果一个正方形的周长是36厘米，它的面积是多少平方厘米？"
        },
        "options": [
          {
            "zh-HK": "81",
            "en": "81",
            "ja": "81",
            "ko": "81",
            "zh-CN": "81"
          },
          {
            "zh-HK": "72",
            "en": "72",
            "ja": "72",
            "ko": "72",
            "zh-CN": "72"
          },
          {
            "zh-HK": "64",
            "en": "64",
            "ja": "64",
            "ko": "64",
            "zh-CN": "64"
          },
          {
            "zh-HK": "36",
            "en": "36",
            "ja": "36",
            "ko": "36",
            "zh-CN": "36"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "English Mathematics",
          "en": "English Mathematics",
          "ja": "英語数学",
          "ko": "영어 수학",
          "zh-CN": "英语数学"
        },
        "question": {
          "zh-HK": "",
          "en": "If a rectangle has a length of 8 cm and a width of 5 cm, what is its area?",
          "ja": "長さ8cm、幅5cmの長方形の面積は何ですか？",
          "ko": "직사각형의 길이가 8cm이고 너비가 5cm라면, 그 면적은 얼마입니까?",
          "zh-CN": "如果一个长方形的长是8厘米，宽是5厘米，它的面积是多少？"
        },
        "options": [
          {
            "zh-HK": "A) 26 cm²",
            "en": "A) 26 cm²",
            "ja": "A) 26 cm²",
            "ko": "A) 26 cm²",
            "zh-CN": "A) 26 平方厘米"
          },
          {
            "zh-HK": "B) 40 cm²",
            "en": "B) 40 cm²",
            "ja": "B) 40 cm²",
            "ko": "B) 40 cm²",
            "zh-CN": "B) 40 平方厘米"
          },
          {
            "zh-HK": "C) 13 cm²",
            "en": "C) 13 cm²",
            "ja": "C) 13 cm²",
            "ko": "C) 13 cm²",
            "zh-CN": "C) 13 平方厘米"
          },
          {
            "zh-HK": "D) 80 cm²",
            "en": "D) 80 cm²",
            "ja": "D) 80 cm²",
            "ko": "D) 80 cm²",
            "zh-CN": "D) 80 平方厘米"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 1,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "",
          "en": "Primary 1 Mathematics Exercise",
          "ja": "小1算数練習問題",
          "ko": "초등학교 1학년 수학 연습 문제",
          "zh-CN": "小一数学练习题"
        },
        "options": [],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "Mathematics",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "",
          "en": "Grade 1 Math Exercises",
          "ja": "小学1年生の算数練習問題",
          "ko": "초등학교 1학년 수학 연습 문제",
          "zh-CN": "小一数学练习题"
        },
        "options": [],
        "correctAnswer": 0
      },
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "找出句子中的錯別字：「妹妹在公完裏開心地玩耍。」\n選項: ['A. 妹', 'B. 完', 'C. 裏', 'D. 耍']\n正確答案索引: 1",
          "en": "Find the incorrect character in the sentence: '妹妹在公完裏開心地玩耍。'",
          "ja": "「妹は公完裏で楽しく遊んでいる。」という文中の誤字を見つけなさい。",
          "ko": "문장에서 틀린 글자를 찾으시오: '妹妹在公完裏開心地玩耍。'",
          "zh-CN": "找出句子中的错别字：「妹妹在公完裏开心地玩耍。」"
        },
        "options": [
          {
            "zh-HK": "A. 妹",
            "en": "A. Mei (younger sister)",
            "ja": "A. 妹",
            "ko": "A. 妹 (여동생)",
            "zh-CN": "A. 妹"
          },
          {
            "zh-HK": "B. 完",
            "en": "B. Wan (finish)",
            "ja": "B. 完",
            "ko": "B. 完 (완전할 완)",
            "zh-CN": "B. 完"
          },
          {
            "zh-HK": "C. 裏",
            "en": "C. Li (inside)",
            "ja": "C. 裏",
            "ko": "C. 裏 (속 리)",
            "zh-CN": "C. 裏"
          },
          {
            "zh-HK": "D. 耍",
            "en": "D. Shua (play)",
            "ja": "D. 耍",
            "ko": "D. 耍 (놀 사)",
            "zh-CN": "D. 耍"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "哪一個字的筆畫最少？\n選項: A. 一, B. 人, C. 大, D. 天\n正確答案索引: 0",
          "en": "Which character has the fewest strokes?",
          "ja": "どの漢字の画数が一番少ないですか？",
          "ko": "어떤 한자의 획수가 가장 적습니까?",
          "zh-CN": "哪个字的笔画最少？"
        },
        "options": [
          {
            "zh-HK": "一",
            "en": "One",
            "ja": "一",
            "ko": "일",
            "zh-CN": "一"
          },
          {
            "zh-HK": "人",
            "en": "Person",
            "ja": "人",
            "ko": "인",
            "zh-CN": "人"
          },
          {
            "zh-HK": "大",
            "en": "Big",
            "ja": "大",
            "ko": "대",
            "zh-CN": "大"
          },
          {
            "zh-HK": "天",
            "en": "Sky",
            "ja": "天",
            "ko": "천",
            "zh-CN": "天"
          }
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "grade": "p5",
    "gradeLabel": {
      "zh-HK": "小五",
      "en": "Grade 5",
      "ja": "小学5年",
      "ko": "초등학교 5학년",
      "zh-CN": "小学五年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "下列哪個成語形容做事非常專心，不為外界事物所干擾？",
          "en": "Which idiom describes being very focused on doing things, undisturbed by external matters?",
          "ja": "次のどの慣用句が、外部の事柄に邪魔されずに物事に非常に集中している様子を表していますか？",
          "ko": "다음 중 어떤 성어가 외부의 방해 없이 일에 매우 집중하는 모습을 묘사합니까?",
          "zh-CN": "下列哪个成语形容做事非常专心，不为外界事物所干扰？"
        },
        "options": [
          {
            "zh-HK": "A. 一心一意",
            "en": "A. Wholeheartedly",
            "ja": "A. 一心一意",
            "ko": "A. 일심일의",
            "zh-CN": "A. 一心一意"
          },
          {
            "zh-HK": "B. 三心二意",
            "en": "B. Half-hearted",
            "ja": "B. 三心二意",
            "ko": "B. 삼심이의",
            "zh-CN": "B. 三心二意"
          },
          {
            "zh-HK": "C. 粗心大意",
            "en": "C. Careless",
            "ja": "C. 粗心大意",
            "ko": "C. 조심대의",
            "zh-CN": "C. 粗心大意"
          },
          {
            "zh-HK": "D. 馬馬虎虎",
            "en": "D. Careless",
            "ja": "D. 馬馬虎虎",
            "ko": "D. 마마호호",
            "zh-CN": "D. 马马虎虎"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "「時間就像流水一樣，一去不復返。」這句話使用了哪種修辭手法？",
          "en": "'Time is like flowing water, it never returns.' Which rhetorical device is used in this sentence?",
          "ja": "「時間は流れる水のように、一度去ったら戻らない。」この文はどの修辞技法を使っていますか？",
          "ko": "'시간은 흐르는 물과 같아서 한 번 가면 돌아오지 않는다.' 이 문장은 어떤 수사법을 사용했습니까?",
          "zh-CN": "'时间就像流水一样，一去不复返。' 这句话使用了哪种修辞手法？"
        },
        "options": [
          {
            "zh-HK": "A. 比喻",
            "en": "A. Metaphor",
            "ja": "A. 比喩",
            "ko": "A. 비유",
            "zh-CN": "A. 比喻"
          },
          {
            "zh-HK": "B. 擬人",
            "en": "B. Personification",
            "ja": "B. 擬人",
            "ko": "B. 의인화",
            "zh-CN": "B. 拟人"
          },
          {
            "zh-HK": "C. 排比",
            "en": "C. Parallelism",
            "ja": "C. 並列",
            "ko": "C. 배비",
            "zh-CN": "C. 排比"
          },
          {
            "zh-HK": "D. 誇張",
            "en": "D. Hyperbole",
            "ja": "D. 誇張",
            "ko": "D. 과장",
            "zh-CN": "D. 夸张"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "閱讀以下段落，並回答問題：\n\n小明今天非常開心，因為他考了全班第一名。回到家後，媽媽為他準備了他最喜歡的雞腿飯，爸爸也誇獎了他。\n\n問題：小明為什麼開心？",
          "en": "Read the following paragraph and answer the question:\n\nXiao Ming was very happy today because he got first place in the class. After returning home, his mother prepared his favorite chicken drumstick rice, and his father also praised him.\n\nQuestion: Why was Xiao Ming happy?",
          "ja": "以下の段落を読んで質問に答えてください：\n\n小明は今日、クラスで一番になったのでとても嬉しかった。家に帰ると、お母さんが彼の大好きな鶏もも肉ご飯を用意してくれ、お父さんも彼を褒めた。\n\n質問：小明はなぜ嬉しかったのですか？",
          "ko": "다음 단락을 읽고 질문에 답하시오:\n\n샤오밍은 오늘 반에서 1등을 해서 매우 기뻤다. 집에 돌아오자 엄마는 그가 가장 좋아하는 닭다리 밥을 준비해 주었고, 아빠도 그를 칭찬했다.\n\n질문: 샤오밍은 왜 기뻤습니까?",
          "zh-CN": "阅读以下段落，并回答问题：\n\n小明今天非常开心，因为他考了全班第一名。回到家后，妈妈为他准备了他最喜欢的鸡腿饭，爸爸也夸奖了他。\n\n问题：小明为什么开心？"
        },
        "options": [
          {
            "zh-HK": "A. 媽媽煮了雞腿飯",
            "en": "A. Mom cooked chicken drumstick rice",
            "ja": "A. お母さんが鶏もも肉ご飯を作ったから",
            "ko": "A. 엄마가 닭다리 밥을 해줘서",
            "zh-CN": "A. 妈妈煮了鸡腿饭"
          },
          {
            "zh-HK": "B. 爸爸誇獎了他",
            "en": "B. Dad praised him",
            "ja": "B. お父さんが彼を褒めたから",
            "ko": "B. 아빠가 그를 칭찬해서",
            "zh-CN": "B. 爸爸夸奖了他"
          },
          {
            "zh-HK": "C. 考了全班第一名",
            "en": "C. Got first place in class",
            "ja": "C. クラスで一番になったから",
            "ko": "C. 반에서 1등을 해서",
            "zh-CN": "C. 考了全班第一名"
          },
          {
            "zh-HK": "D. 以上皆是",
            "en": "D. All of the above",
            "ja": "D. 上記すべて",
            "ko": "D. 위 모두",
            "zh-CN": "D. 以上皆是"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "文言文",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「學而時習之，不亦說乎？」這句話出自哪部經典？",
          "en": "'Is it not pleasant to learn with a constant perseverance and application?' From which classic text is this sentence?",
          "ja": "「学んで時に之を習う、亦た説ばしからずや？」この文はどの古典から来ていますか？",
          "ko": "'배우고 때때로 익히면 또한 기쁘지 아니한가?' 이 문장은 어떤 고전에서 나옵니까?",
          "zh-CN": "'学而时习之，不亦说乎？' 这句话出自哪部经典？"
        },
        "options": [
          {
            "zh-HK": "A. 孟子",
            "en": "A. Mencius",
            "ja": "A. 孟子",
            "ko": "A. 맹자",
            "zh-CN": "A. 孟子"
          },
          {
            "zh-HK": "B. 論語",
            "en": "B. Analects",
            "ja": "B. 論語",
            "ko": "B. 논어",
            "zh-CN": "B. 论语"
          },
          {
            "zh-HK": "C. 道德經",
            "en": "C. Tao Te Ching",
            "ja": "C. 道德経",
            "ko": "C. 도덕경",
            "zh-CN": "C. 道德经"
          },
          {
            "zh-HK": "D. 莊子",
            "en": "D. Zhuangzi",
            "ja": "D. 荘子",
            "ko": "D. 장자",
            "zh-CN": "D. 庄子"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "文言文",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「有朋自遠方來，不亦樂乎？」這句話表達了什麼意思？",
          "en": "'Is it not delightful to have friends coming from distant quarters?' What does this sentence mean?",
          "ja": "「遠方より朋有り、亦た楽しからずや？」この文は何を意味しますか？",
          "ko": "'먼 곳에서 친구가 찾아오니 또한 즐겁지 아니한가?' 이 문장은 무엇을 의미합니까?",
          "zh-CN": "'有朋自远方来，不亦乐乎？' 这句话表达了什么意思？"
        },
        "options": [
          {
            "zh-HK": "A. 朋友很多",
            "en": "A. Many friends",
            "ja": "A. 友達が多い",
            "ko": "A. 친구가 많다",
            "zh-CN": "A. 朋友很多"
          },
          {
            "zh-HK": "B. 喜歡旅行",
            "en": "B. Likes to travel",
            "ja": "B. 旅行が好き",
            "ko": "B. 여행을 좋아한다",
            "zh-CN": "B. 喜欢旅行"
          },
          {
            "zh-HK": "C. 遠方來的朋友令人高興",
            "en": "C. Friends from afar bring joy",
            "ja": "C. 遠方から来る友達は嬉しい",
            "ko": "C. 먼 곳에서 온 친구는 기쁘다",
            "zh-CN": "C. 远方来的朋友令人高兴"
          },
          {
            "zh-HK": "D. 學習很快樂",
            "en": "D. Learning is joyful",
            "ja": "D. 学びは楽しい",
            "ko": "D. 학습은 즐겁다",
            "zh-CN": "D. 学习很快乐"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "By the time I arrived at the station, the train ______ left.",
          "en": "By the time I arrived at the station, the train ______ left.",
          "ja": "By the time I arrived at the station, the train ______ left.",
          "ko": "By the time I arrived at the station, the train ______ left.",
          "zh-CN": "By the time I arrived at the station, the train ______ left."
        },
        "options": [
          {
            "zh-HK": "A. has",
            "en": "A. has",
            "ja": "A. has",
            "ko": "A. has",
            "zh-CN": "A. has"
          },
          {
            "zh-HK": "B. had",
            "en": "B. had",
            "ja": "B. had",
            "ko": "B. had",
            "zh-CN": "B. had"
          },
          {
            "zh-HK": "C. will have",
            "en": "C. will have",
            "ja": "C. will have",
            "ko": "C. will have",
            "zh-CN": "C. will have"
          },
          {
            "zh-HK": "D. was",
            "en": "D. was",
            "ja": "D. was",
            "ko": "D. was",
            "zh-CN": "D. was"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "By next month, she ______ her project.",
          "en": "By next month, she ______ her project.",
          "ja": "By next month, she ______ her project.",
          "ko": "By next month, she ______ her project.",
          "zh-CN": "By next month, she ______ her project."
        },
        "options": [
          {
            "zh-HK": "A. will finish",
            "en": "A. will finish",
            "ja": "A. will finish",
            "ko": "A. will finish",
            "zh-CN": "A. will finish"
          },
          {
            "zh-HK": "B. has finished",
            "en": "B. has finished",
            "ja": "B. has finished",
            "ko": "B. has finished",
            "zh-CN": "B. has finished"
          },
          {
            "zh-HK": "C. will have finished",
            "en": "C. will have finished",
            "ja": "C. will have finished",
            "ko": "C. will have finished",
            "zh-CN": "C. will have finished"
          },
          {
            "zh-HK": "D. finished",
            "en": "D. finished",
            "ja": "D. finished",
            "ko": "D. finished",
            "zh-CN": "D. finished"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Read the passage and answer the question:\n\n'The cat sat on the mat. It was a fluffy, white cat with green eyes. It purred softly as it watched a bird outside the window.'\n\nQuestion: What color were the cat's eyes?",
          "en": "Read the passage and answer the question:\n\n'The cat sat on the mat. It was a fluffy, white cat with green eyes. It purred softly as it watched a bird outside the window.'\n\nQuestion: What color were the cat's eyes?",
          "ja": "Read the passage and answer the question:\n\n'The cat sat on the mat. It was a fluffy, white cat with green eyes. It purred softly as it watched a bird outside the window.'\n\nQuestion: What color were the cat's eyes?",
          "ko": "Read the passage and answer the question:\n\n'The cat sat on the mat. It was a fluffy, white cat with green eyes. It purred softly as it watched a bird outside the window.'\n\nQuestion: What color were the cat's eyes?",
          "zh-CN": "Read the passage and answer the question:\n\n'The cat sat on the mat. It was a fluffy, white cat with green eyes. It purred softly as it watched a bird outside the window.'\n\nQuestion: What color were the cat's eyes?"
        },
        "options": [
          {
            "zh-HK": "A. Blue",
            "en": "A. Blue",
            "ja": "A. Blue",
            "ko": "A. Blue",
            "zh-CN": "A. Blue"
          },
          {
            "zh-HK": "B. Green",
            "en": "B. Green",
            "ja": "B. Green",
            "ko": "B. Green",
            "zh-CN": "B. Green"
          },
          {
            "zh-HK": "C. Brown",
            "en": "C. Brown",
            "ja": "C. Brown",
            "ko": "C. Brown",
            "zh-CN": "C. Brown"
          },
          {
            "zh-HK": "D. Black",
            "en": "D. Black",
            "ja": "D. Black",
            "ko": "D. Black",
            "zh-CN": "D. Black"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Read the passage and answer the question:\n\n'Tom loves to play football. Every Saturday, he goes to the park with his friends to practice. He dreams of becoming a famous football player one day.'\n\nQuestion: What does Tom do every Saturday?",
          "en": "Read the passage and answer the question:\n\n'Tom loves to play football. Every Saturday, he goes to the park with his friends to practice. He dreams of becoming a famous football player one day.'\n\nQuestion: What does Tom do every Saturday?",
          "ja": "Read the passage and answer the question:\n\n'Tom loves to play football. Every Saturday, he goes to the park with his friends to practice. He dreams of becoming a famous football player one day.'\n\nQuestion: What does Tom do every Saturday?",
          "ko": "Read the passage and answer the question:\n\n'Tom loves to play football. Every Saturday, he goes to the park with his friends to practice. He dreams of becoming a famous football player one day.'\n\nQuestion: What does Tom do every Saturday?",
          "zh-CN": "Read the passage and answer the question:\n\n'Tom loves to play football. Every Saturday, he goes to the park with his friends to practice. He dreams of becoming a famous football player one day.'\n\nQuestion: What does Tom do every Saturday?"
        },
        "options": [
          {
            "zh-HK": "A. He watches TV.",
            "en": "A. He watches TV.",
            "ja": "A. He watches TV.",
            "ko": "A. He watches TV.",
            "zh-CN": "A. He watches TV."
          },
          {
            "zh-HK": "B. He plays basketball.",
            "en": "B. He plays basketball.",
            "ja": "B. He plays basketball.",
            "ko": "B. He plays basketball.",
            "zh-CN": "B. He plays basketball."
          },
          {
            "zh-HK": "C. He goes to the park to play football.",
            "en": "C. He goes to the park to play football.",
            "ja": "C. He goes to the park to play football.",
            "ko": "C. He goes to the park to play football.",
            "zh-CN": "C. He goes to the park to play football."
          },
          {
            "zh-HK": "D. He studies at home.",
            "en": "D. He studies at home.",
            "ja": "D. He studies at home.",
            "ko": "D. He studies at home.",
            "zh-CN": "D. He studies at home."
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "計算：1/2 + 1/4 = ?",
          "en": "Calculate: 1/2 + 1/4 = ?",
          "ja": "計算：1/2 + 1/4 = ?",
          "ko": "계산: 1/2 + 1/4 = ?",
          "zh-CN": "计算：1/2 + 1/4 = ?"
        },
        "options": [
          {
            "zh-HK": "A. 1/8",
            "en": "A. 1/8",
            "ja": "A. 1/8",
            "ko": "A. 1/8",
            "zh-CN": "A. 1/8"
          },
          {
            "zh-HK": "B. 2/6",
            "en": "B. 2/6",
            "ja": "B. 2/6",
            "ko": "B. 2/6",
            "zh-CN": "B. 2/6"
          },
          {
            "zh-HK": "C. 3/4",
            "en": "C. 3/4",
            "ja": "C. 3/4",
            "ko": "C. 3/4",
            "zh-CN": "C. 3/4"
          },
          {
            "zh-HK": "D. 2/4",
            "en": "D. 2/4",
            "ja": "D. 2/4",
            "ko": "D. 2/4",
            "zh-CN": "D. 2/4"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "一個長方形長5厘米，寬3厘米，它的面積是多少？",
          "en": "A rectangle is 5 cm long and 3 cm wide. What is its area?",
          "ja": "長方形の長さが5cm、幅が3cmの場合、その面積はいくつですか？",
          "ko": "직사각형의 길이가 5cm, 너비가 3cm일 때, 그 면적은 얼마입니까?",
          "zh-CN": "一个长方形长5厘米，宽3厘米，它的面积是多少？"
        },
        "options": [
          {
            "zh-HK": "A. 8平方厘米",
            "en": "A. 8 square cm",
            "ja": "A. 8平方センチメートル",
            "ko": "A. 8제곱센티미터",
            "zh-CN": "A. 8平方厘米"
          },
          {
            "zh-HK": "B. 15平方厘米",
            "en": "B. 15 square cm",
            "ja": "B. 15平方センチメートル",
            "ko": "B. 15제곱센티미터",
            "zh-CN": "B. 15平方厘米"
          },
          {
            "zh-HK": "C. 16厘米",
            "en": "C. 16 cm",
            "ja": "C. 16センチメートル",
            "ko": "C. 16센티미터",
            "zh-CN": "C. 16厘米"
          },
          {
            "zh-HK": "D. 25平方厘米",
            "en": "D. 25 square cm",
            "ja": "D. 25平方センチメートル",
            "ko": "D. 25제곱센티미터",
            "zh-CN": "D. 25平方厘米"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 12,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "小明以每小時5公里的速度走了2小時，他走了多遠？",
          "en": "Xiao Ming walked at a speed of 5 km/h for 2 hours. How far did he walk?",
          "ja": "小明が時速5kmで2時間歩いた場合、どれくらいの距離を歩きましたか？",
          "ko": "샤오밍이 시속 5km로 2시간 걸었다면, 얼마나 멀리 걸었습니까?",
          "zh-CN": "小明以每小时5公里的速度走了2小时，他走了多远？"
        },
        "options": [
          {
            "zh-HK": "A. 5公里",
            "en": "A. 5 km",
            "ja": "A. 5キロメートル",
            "ko": "A. 5킬로미터",
            "zh-CN": "A. 5公里"
          },
          {
            "zh-HK": "B. 7公里",
            "en": "B. 7 km",
            "ja": "B. 7キロメートル",
            "ko": "B. 7킬로미터",
            "zh-CN": "B. 7公里"
          },
          {
            "zh-HK": "C. 10公里",
            "en": "C. 10 km",
            "ja": "C. 10キロメートル",
            "ko": "C. 10킬로미터",
            "zh-CN": "C. 10公里"
          },
          {
            "zh-HK": "D. 12公里",
            "en": "D. 12 km",
            "ja": "D. 12キロメートル",
            "ko": "D. 12킬로미터",
            "zh-CN": "D. 12公里"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 13,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "John ate 1/3 of a pizza, and Mary ate 1/6 of the same pizza. What fraction of the pizza did they eat in total?",
          "en": "John ate 1/3 of a pizza, and Mary ate 1/6 of the same pizza. What fraction of the pizza did they eat in total?",
          "ja": "John ate 1/3 of a pizza, and Mary ate 1/6 of the same pizza. What fraction of the pizza did they eat in total?",
          "ko": "John ate 1/3 of a pizza, and Mary ate 1/6 of the same pizza. What fraction of the pizza did they eat in total?",
          "zh-CN": "John ate 1/3 of a pizza, and Mary ate 1/6 of the same pizza. What fraction of the pizza did they eat in total?"
        },
        "options": [
          {
            "zh-HK": "A. 1/2",
            "en": "A. 1/2",
            "ja": "A. 1/2",
            "ko": "A. 1/2",
            "zh-CN": "A. 1/2"
          },
          {
            "zh-HK": "B. 2/9",
            "en": "B. 2/9",
            "ja": "B. 2/9",
            "ko": "B. 2/9",
            "zh-CN": "B. 2/9"
          },
          {
            "zh-HK": "C. 1/3",
            "en": "C. 1/3",
            "ja": "C. 1/3",
            "ko": "C. 1/3",
            "zh-CN": "C. 1/3"
          },
          {
            "zh-HK": "D. 1/6",
            "en": "D. 1/6",
            "ja": "D. 1/6",
            "ko": "D. 1/6",
            "zh-CN": "D. 1/6"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 14,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A square garden has a side length of 4 meters. What is the area of the garden?",
          "en": "A square garden has a side length of 4 meters. What is the area of the garden?",
          "ja": "A square garden has a side length of 4 meters. What is the area of the garden?",
          "ko": "A square garden has a side length of 4 meters. What is the area of the garden?",
          "zh-CN": "A square garden has a side length of 4 meters. What is the area of the garden?"
        },
        "options": [
          {
            "zh-HK": "A. 8 square meters",
            "en": "A. 8 square meters",
            "ja": "A. 8 square meters",
            "ko": "A. 8 square meters",
            "zh-CN": "A. 8 square meters"
          },
          {
            "zh-HK": "B. 12 square meters",
            "en": "B. 12 square meters",
            "ja": "B. 12 square meters",
            "ko": "B. 12 square meters",
            "zh-CN": "B. 12 square meters"
          },
          {
            "zh-HK": "C. 16 square meters",
            "en": "C. 16 square meters",
            "ja": "C. 16 square meters",
            "ko": "C. 16 square meters",
            "zh-CN": "C. 16 square meters"
          },
          {
            "zh-HK": "D. 20 square meters",
            "en": "D. 20 square meters",
            "ja": "D. 20 square meters",
            "ko": "D. 20 square meters",
            "zh-CN": "D. 20 square meters"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 15,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A rectangular field is 10 meters long and 5 meters wide. If 1/2 of the field is used for planting flowers, what is the area used for flowers?",
          "en": "A rectangular field is 10 meters long and 5 meters wide. If 1/2 of the field is used for planting flowers, what is the area used for flowers?",
          "ja": "A rectangular field is 10 meters long and 5 meters wide. If 1/2 of the field is used for planting flowers, what is the area used for flowers?",
          "ko": "A rectangular field is 10 meters long and 5 meters wide. If 1/2 of the field is used for planting flowers, what is the area used for flowers?",
          "zh-CN": "A rectangular field is 10 meters long and 5 meters wide. If 1/2 of the field is used for planting flowers, what is the area used for flowers?"
        },
        "options": [
          {
            "zh-HK": "A. 50 square meters",
            "en": "A. 50 square meters",
            "ja": "A. 50 square meters",
            "ko": "A. 50 square meters",
            "zh-CN": "A. 50 square meters"
          },
          {
            "zh-HK": "B. 25 square meters",
            "en": "B. 25 square meters",
            "ja": "B. 25 square meters",
            "ko": "B. 25 square meters",
            "zh-CN": "B. 25 square meters"
          },
          {
            "zh-HK": "C. 15 square meters",
            "en": "C. 15 square meters",
            "ja": "C. 15 square meters",
            "ko": "C. 15 square meters",
            "zh-CN": "C. 15 square meters"
          },
          {
            "zh-HK": "D. 10 square meters",
            "en": "D. 10 square meters",
            "ja": "D. 10 square meters",
            "ko": "D. 10 square meters",
            "zh-CN": "D. 10 square meters"
          }
        ],
        "correctAnswer": 1
      }
    ]
  },
  {
    "grade": "p6",
    "gradeLabel": {
      "zh-HK": "小六",
      "en": "Grade 6",
      "ja": "小学6年",
      "ko": "초등학교 6학년",
      "zh-CN": "小学六年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "閱讀以下句子，判斷其修辭手法：\n\n「天上的星星像一顆顆閃爍的鑽石。」",
          "en": "Read the following sentence and identify the rhetorical device:\n\n\"The stars in the sky are like twinkling diamonds.\"",
          "ja": "次の文を読んで、その修辞技法を特定してください。\n\n「空の星はきらめくダイヤモンドのようです。」",
          "ko": "다음 문장을 읽고 수사법을 파악하세요.\n\n\"하늘의 별들은 반짝이는 다이아몬드와 같다.\"",
          "zh-CN": "阅读以下句子，判断其修辞手法：\n\n“天上的星星像一颗颗闪烁的钻石。”"
        },
        "options": [
          {
            "zh-HK": "A. 比喻",
            "en": "A. Simile",
            "ja": "A. 比喩",
            "ko": "A. 직유",
            "zh-CN": "A. 比喻"
          },
          {
            "zh-HK": "B. 擬人",
            "en": "B. Personification",
            "ja": "B. 擬人化",
            "ko": "B. 의인화",
            "zh-CN": "B. 拟人"
          },
          {
            "zh-HK": "C. 排比",
            "en": "C. Parallelism",
            "ja": "C. 並列",
            "ko": "C. 대구",
            "zh-CN": "C. 排比"
          },
          {
            "zh-HK": "D. 誇張",
            "en": "D. Hyperbole",
            "ja": "D. 誇張",
            "ko": "D. 과장",
            "zh-CN": "D. 夸张"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "以下哪句成語最適合形容一個人非常勤奮，不辭勞苦？",
          "en": "Which idiom best describes someone who is very diligent and spares no effort?",
          "ja": "次のうち、非常に勤勉で努力を惜しまない人を最もよく表す成語はどれですか？",
          "ko": "다음 중 매우 부지런하고 노력을 아끼지 않는 사람을 가장 잘 묘사하는 성어는 무엇입니까?",
          "zh-CN": "以下哪句成语最适合形容一个人非常勤奋，不辞劳苦？"
        },
        "options": [
          {
            "zh-HK": "A. 守株待兔",
            "en": "A. Waiting for a rabbit by a tree stump",
            "ja": "A. 株を守りて兎を待つ",
            "ko": "A. 수주대토",
            "zh-CN": "A. 守株待兔"
          },
          {
            "zh-HK": "B. 刻舟求劍",
            "en": "B. Carving a mark on a boat to find a lost sword",
            "ja": "B. 舟に刻みて剣を求む",
            "ko": "B. 각주구검",
            "zh-CN": "B. 刻舟求剑"
          },
          {
            "zh-HK": "C. 廢寢忘餐",
            "en": "C. Forgetting to eat and sleep",
            "ja": "C. 寝食を忘れる",
            "ko": "C. 폐침망찬",
            "zh-CN": "C. 废寝忘餐"
          },
          {
            "zh-HK": "D. 緣木求魚",
            "en": "D. Climbing a tree to catch fish",
            "ja": "D. 木に縁りて魚を求む",
            "ko": "D. 연목구어",
            "zh-CN": "D. 缘木求鱼"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "閱讀以下短文，並回答問題：\n\n小明今天非常開心，因為他收到了一份特別的生日禮物。這份禮物是他一直夢寐以求的智能機械人。他迫不及待地打開包裝，開始和機械人玩耍。\n\n問題：小明為什麼開心？",
          "en": "Read the following short passage and answer the question:\n\nXiao Ming was very happy today because he received a special birthday gift. This gift was a smart robot he had always dreamed of. He couldn't wait to open the package and start playing with the robot.\n\nQuestion: Why was Xiao Ming happy?",
          "ja": "次の短い文章を読んで質問に答えてください。\n\nシャオミンは今日、特別な誕生日プレゼントをもらったのでとても嬉しかった。それは彼がずっと夢見ていたスマートロボットだった。彼は待ちきれずにパッケージを開け、ロボットと遊び始めた。\n\n質問：シャオミンはなぜ嬉しかったのですか？",
          "ko": "다음 짧은 글을 읽고 질문에 답하세요.\n\n샤오밍은 오늘 특별한 생일 선물을 받아서 매우 기뻤다. 이 선물은 그가 항상 꿈꿔왔던 스마트 로봇이었다. 그는 참지 못하고 포장을 열어 로봇과 놀기 시작했다.\n\n질문: 샤오밍은 왜 기뻤습니까?",
          "zh-CN": "阅读以下短文，并回答问题：\n\n小明今天非常开心，因为他收到了一份特别的生日礼物。这份礼物是他一直梦寐以求的智能机器人。他迫不及待地打开包装，开始和机器人玩耍。\n\n问题：小明为什么开心？"
        },
        "options": [
          {
            "zh-HK": "A. 他收到了一份生日禮物",
            "en": "A. He received a birthday gift",
            "ja": "A. 誕生日プレゼントをもらったから",
            "ko": "A. 생일 선물을 받아서",
            "zh-CN": "A. 他收到了一份生日礼物"
          },
          {
            "zh-HK": "B. 他買了一個智能機械人",
            "en": "B. He bought a smart robot",
            "ja": "B. スマートロボットを買ったから",
            "ko": "B. 스마트 로봇을 사서",
            "zh-CN": "B. 他买了一个智能机器人"
          },
          {
            "zh-HK": "C. 他去參加派對",
            "en": "C. He went to a party",
            "ja": "C. パーティーに行ったから",
            "ko": "C. 파티에 가서",
            "zh-CN": "C. 他去参加派对"
          },
          {
            "zh-HK": "D. 他和朋友玩耍",
            "en": "D. He played with friends",
            "ja": "D. 友達と遊んだから",
            "ko": "D. 친구들과 놀아서",
            "zh-CN": "D. 他和朋友玩耍"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「學而時習之，不亦說乎？」此句出自《論語》，「說」字的意思是甚麼？",
          "en": "\"To learn and then to practice what has been learned in due time, is that not a pleasure?\" This sentence is from \"The Analects.\" What does the character \"說\" (yuè) mean?",
          "ja": "「学んで時に之を習う、亦た説ばしからずや？」この句は『論語』からですが、「説」の字の意味は何ですか？",
          "ko": "\"배우고 때때로 그것을 익히면 또한 기쁘지 아니한가?\" 이 문장은 \"논어\"에서 나왔습니다. \"說\" (yuè) 자의 의미는 무엇입니까?",
          "zh-CN": "“学而时习之，不亦说乎？”此句出自《论语》，“说”字的意思是什么？"
        },
        "options": [
          {
            "zh-HK": "A. 說話",
            "en": "A. To speak",
            "ja": "A. 話す",
            "ko": "A. 말하다",
            "zh-CN": "A. 说话"
          },
          {
            "zh-HK": "B. 喜悅",
            "en": "B. Pleasure",
            "ja": "B. 喜び",
            "ko": "B. 기쁨",
            "zh-CN": "B. 喜悦"
          },
          {
            "zh-HK": "C. 解釋",
            "en": "C. To explain",
            "ja": "C. 説明する",
            "ko": "C. 설명하다",
            "zh-CN": "C. 解释"
          },
          {
            "zh-HK": "D. 勸說",
            "en": "D. To persuade",
            "ja": "D. 説得する",
            "ko": "D. 설득하다",
            "zh-CN": "D. 劝说"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "「富貴不能淫，貧賤不能移，威武不能屈。」此句出自《孟子》，它主要強調了什麼？",
          "en": "\"Neither riches nor honors can corrupt him, neither poverty nor humble condition can make him swerve from his principles, neither threats nor force can bend him.\" This sentence is from \"Mencius.\" What does it mainly emphasize?",
          "ja": "「富貴も淫する能わず、貧賤も移す能わず、威武も屈する能わず。」この句は『孟子』からですが、主に何を強調していますか？",
          "ko": "\"부귀도 그를 타락시킬 수 없고, 빈천도 그의 원칙을 바꾸게 할 수 없으며, 위협이나 힘도 그를 굴복시킬 수 없다.\" 이 문장은 \"맹자\"에서 나왔습니다. 주로 무엇을 강조합니까?",
          "zh-CN": "“富贵不能淫，贫贱不能移，威武不能屈。”此句出自《孟子》，它主要强调了什么？"
        },
        "options": [
          {
            "zh-HK": "A. 人的財富",
            "en": "A. Human wealth",
            "ja": "A. 人の富",
            "ko": "A. 인간의 부",
            "zh-CN": "A. 人的财富"
          },
          {
            "zh-HK": "B. 人的地位",
            "en": "B. Human status",
            "ja": "B. 人の地位",
            "ko": "B. 인간의 지위",
            "zh-CN": "B. 人的地位"
          },
          {
            "zh-HK": "C. 人的氣節",
            "en": "C. Human integrity",
            "ja": "C. 人の気節",
            "ko": "C. 인간의 기개",
            "zh-CN": "C. 人的气节"
          },
          {
            "zh-HK": "D. 人的權力",
            "en": "D. Human power",
            "ja": "D. 人の権力",
            "ko": "D. 인간의 권력",
            "zh-CN": "D. 人的权力"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Choose the correct passive voice sentence:\n\n'Someone stole my bicycle yesterday.'",
          "en": "Choose the correct passive voice sentence:\n\n'Someone stole my bicycle yesterday.'",
          "ja": "Choose the correct passive voice sentence:\n\n'Someone stole my bicycle yesterday.'",
          "ko": "Choose the correct passive voice sentence:\n\n'Someone stole my bicycle yesterday.'",
          "zh-CN": "Choose the correct passive voice sentence:\n\n'Someone stole my bicycle yesterday.'"
        },
        "options": [
          {
            "zh-HK": "A. My bicycle was stolen yesterday.",
            "en": "A. My bicycle was stolen yesterday.",
            "ja": "A. My bicycle was stolen yesterday.",
            "ko": "A. My bicycle was stolen yesterday.",
            "zh-CN": "A. My bicycle was stolen yesterday."
          },
          {
            "zh-HK": "B. My bicycle stole yesterday.",
            "en": "B. My bicycle stole yesterday.",
            "ja": "B. My bicycle stole yesterday.",
            "ko": "B. My bicycle stole yesterday.",
            "zh-CN": "B. My bicycle stole yesterday."
          },
          {
            "zh-HK": "C. Someone was stolen my bicycle yesterday.",
            "en": "C. Someone was stolen my bicycle yesterday.",
            "ja": "C. Someone was stolen my bicycle yesterday.",
            "ko": "C. Someone was stolen my bicycle yesterday.",
            "zh-CN": "C. Someone was stolen my bicycle yesterday."
          },
          {
            "zh-HK": "D. My bicycle is stolen yesterday.",
            "en": "D. My bicycle is stolen yesterday.",
            "ja": "D. My bicycle is stolen yesterday.",
            "ko": "D. My bicycle is stolen yesterday.",
            "zh-CN": "D. My bicycle is stolen yesterday."
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Complete the conditional sentence:\n\n'If I had studied harder, I _____ the exam.'",
          "en": "Complete the conditional sentence:\n\n'If I had studied harder, I _____ the exam.'",
          "ja": "Complete the conditional sentence:\n\n'If I had studied harder, I _____ the exam.'",
          "ko": "Complete the conditional sentence:\n\n'If I had studied harder, I _____ the exam.'",
          "zh-CN": "Complete the conditional sentence:\n\n'If I had studied harder, I _____ the exam.'"
        },
        "options": [
          {
            "zh-HK": "A. would pass",
            "en": "A. would pass",
            "ja": "A. would pass",
            "ko": "A. would pass",
            "zh-CN": "A. would pass"
          },
          {
            "zh-HK": "B. would have passed",
            "en": "B. would have passed",
            "ja": "B. would have passed",
            "ko": "B. would have passed",
            "zh-CN": "B. would have passed"
          },
          {
            "zh-HK": "C. will pass",
            "en": "C. will pass",
            "ja": "C. will pass",
            "ko": "C. will pass",
            "zh-CN": "C. will pass"
          },
          {
            "zh-HK": "D. pass",
            "en": "D. pass",
            "ja": "D. pass",
            "ko": "D. pass",
            "zh-CN": "D. pass"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Read the passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world. It is home to an incredible variety of plants and animals, including jaguars, monkeys, and colorful birds. The Amazon River, which flows through the rainforest, is the second-longest river in the world.'\n\nQuestion: What is the Amazon rainforest known for?",
          "en": "Read the passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world. It is home to an incredible variety of plants and animals, including jaguars, monkeys, and colorful birds. The Amazon River, which flows through the rainforest, is the second-longest river in the world.'\n\nQuestion: What is the Amazon rainforest known for?",
          "ja": "Read the passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world. It is home to an incredible variety of plants and animals, including jaguars, monkeys, and colorful birds. The Amazon River, which flows through the rainforest, is the second-longest river in the world.'\n\nQuestion: What is the Amazon rainforest known for?",
          "ko": "Read the passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world. It is home to an incredible variety of plants and animals, including jaguars, monkeys, and colorful birds. The Amazon River, which flows through the rainforest, is the second-longest river in the world.'\n\nQuestion: What is the Amazon rainforest known for?",
          "zh-CN": "Read the passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world. It is home to an incredible variety of plants and animals, including jaguars, monkeys, and colorful birds. The Amazon River, which flows through the rainforest, is the second-longest river in the world.'\n\nQuestion: What is the Amazon rainforest known for?"
        },
        "options": [
          {
            "zh-HK": "A. Its deserts",
            "en": "A. Its deserts",
            "ja": "A. Its deserts",
            "ko": "A. Its deserts",
            "zh-CN": "A. Its deserts"
          },
          {
            "zh-HK": "B. Its large cities",
            "en": "B. Its large cities",
            "ja": "B. Its large cities",
            "ko": "B. Its large cities",
            "zh-CN": "B. Its large cities"
          },
          {
            "zh-HK": "C. Its diverse wildlife",
            "en": "C. Its diverse wildlife",
            "ja": "C. Its diverse wildlife",
            "ko": "C. Its diverse wildlife",
            "zh-CN": "C. Its diverse wildlife"
          },
          {
            "zh-HK": "D. Its mountains",
            "en": "D. Its mountains",
            "ja": "D. Its mountains",
            "ko": "D. Its mountains",
            "zh-CN": "D. Its mountains"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Read the passage and answer the question:\n\n'Dolphins are marine mammals known for their intelligence and playful behavior. They live in groups called pods and communicate using a variety of clicks and whistles. Dolphins are carnivores, mainly eating fish and squid.'\n\nQuestion: How do dolphins communicate?",
          "en": "Read the passage and answer the question:\n\n'Dolphins are marine mammals known for their intelligence and playful behavior. They live in groups called pods and communicate using a variety of clicks and whistles. Dolphins are carnivores, mainly eating fish and squid.'\n\nQuestion: How do dolphins communicate?",
          "ja": "Read the passage and answer the question:\n\n'Dolphins are marine mammals known for their intelligence and playful behavior. They live in groups called pods and communicate using a variety of clicks and whistles. Dolphins are carnivores, mainly eating fish and squid.'\n\nQuestion: How do dolphins communicate?",
          "ko": "Read the passage and answer the question:\n\n'Dolphins are marine mammals known for their intelligence and playful behavior. They live in groups called pods and communicate using a variety of clicks and whistles. Dolphins are carnivores, mainly eating fish and squid.'\n\nQuestion: How do dolphins communicate?",
          "zh-CN": "Read the passage and answer the question:\n\n'Dolphins are marine mammals known for their intelligence and playful behavior. They live in groups called pods and communicate using a variety of clicks and whistles. Dolphins are carnivores, mainly eating fish and squid.'\n\nQuestion: How do dolphins communicate?"
        },
        "options": [
          {
            "zh-HK": "A. By singing songs",
            "en": "A. By singing songs",
            "ja": "A. By singing songs",
            "ko": "A. By singing songs",
            "zh-CN": "A. By singing songs"
          },
          {
            "zh-HK": "B. By using clicks and whistles",
            "en": "B. By using clicks and whistles",
            "ja": "B. By using clicks and whistles",
            "ko": "B. By using clicks and whistles",
            "zh-CN": "B. By using clicks and whistles"
          },
          {
            "zh-HK": "C. By writing messages",
            "en": "C. By writing messages",
            "ja": "C. By writing messages",
            "ko": "C. By writing messages",
            "zh-CN": "C. By writing messages"
          },
          {
            "zh-HK": "D. By changing colors",
            "en": "D. By changing colors",
            "ja": "D. By changing colors",
            "ko": "D. By changing colors",
            "zh-CN": "D. By changing colors"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "一件衣服原價是$200，現在打八折出售。請問這件衣服現在的售價是多少？",
          "en": "The original price of a shirt is $200. It is now sold at a 20% discount. What is the current selling price of the shirt?",
          "ja": "シャツの元の価格は200ドルで、現在20％割引で販売されています。シャツの現在の販売価格はいくらですか？",
          "ko": "셔츠의 원래 가격은 200달러입니다. 현재 20% 할인된 가격으로 판매되고 있습니다. 셔츠의 현재 판매 가격은 얼마입니까?",
          "zh-CN": "一件衣服原价是$200，现在打八折出售。请问这件衣服现在的售价是多少？"
        },
        "options": [
          {
            "zh-HK": "A. $140",
            "en": "A. $140",
            "ja": "A. $140",
            "ko": "A. $140",
            "zh-CN": "A. $140"
          },
          {
            "zh-HK": "B. $160",
            "en": "B. $160",
            "ja": "B. $160",
            "ko": "B. $160",
            "zh-CN": "B. $160"
          },
          {
            "zh-HK": "C. $180",
            "en": "C. $180",
            "ja": "C. $180",
            "ko": "C. $180",
            "zh-CN": "C. $180"
          },
          {
            "zh-HK": "D. $200",
            "en": "D. $200",
            "ja": "D. $200",
            "ko": "D. $200",
            "zh-CN": "D. $200"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "小明有10個蘋果，小華有15個蘋果。小明和小華蘋果數量的比例是多少？",
          "en": "Xiao Ming has 10 apples, and Xiao Hua has 15 apples. What is the ratio of Xiao Ming's apples to Xiao Hua's apples?",
          "ja": "シャオミンはリンゴを10個持っており、シャオファはリンゴを15個持っています。シャオミンとシャオファのリンゴの数の比率はいくらですか？",
          "ko": "샤오밍은 사과 10개, 샤오화는 사과 15개를 가지고 있습니다. 샤오밍과 샤오화의 사과 수량 비율은 얼마입니까?",
          "zh-CN": "小明有10个苹果，小华有15个苹果。小明和小华苹果数量的比例是多少？"
        },
        "options": [
          {
            "zh-HK": "A. 1:2",
            "en": "A. 1:2",
            "ja": "A. 1:2",
            "ko": "A. 1:2",
            "zh-CN": "A. 1:2"
          },
          {
            "zh-HK": "B. 2:3",
            "en": "B. 2:3",
            "ja": "B. 2:3",
            "ko": "B. 2:3",
            "zh-CN": "B. 2:3"
          },
          {
            "zh-HK": "C. 3:2",
            "en": "C. 3:2",
            "ja": "C. 3:2",
            "ko": "C. 3:2",
            "zh-CN": "C. 3:2"
          },
          {
            "zh-HK": "D. 2:5",
            "en": "D. 2:5",
            "ja": "D. 2:5",
            "ko": "D. 2:5",
            "zh-CN": "D. 2:5"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 12,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "如果 3x + 5 = 14，那麼 x 的值是多少？",
          "en": "If 3x + 5 = 14, what is the value of x?",
          "ja": "もし 3x + 5 = 14 なら、x の値は何ですか？",
          "ko": "만약 3x + 5 = 14이면, x의 값은 얼마입니까?",
          "zh-CN": "如果 3x + 5 = 14，那么 x 的值是多少？"
        },
        "options": [
          {
            "zh-HK": "A. 2",
            "en": "A. 2",
            "ja": "A. 2",
            "ko": "A. 2",
            "zh-CN": "A. 2"
          },
          {
            "zh-HK": "B. 3",
            "en": "B. 3",
            "ja": "B. 3",
            "ko": "B. 3",
            "zh-CN": "B. 3"
          },
          {
            "zh-HK": "C. 4",
            "en": "C. 4",
            "ja": "C. 4",
            "ko": "C. 4",
            "zh-CN": "C. 4"
          },
          {
            "zh-HK": "D. 5",
            "en": "D. 5",
            "ja": "D. 5",
            "ko": "D. 5",
            "zh-CN": "D. 5"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 13,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A shop offers a 25% discount on all items. If a toy car originally costs $40, what is its price after the discount?",
          "en": "A shop offers a 25% discount on all items. If a toy car originally costs $40, what is its price after the discount?",
          "ja": "A shop offers a 25% discount on all items. If a toy car originally costs $40, what is its price after the discount?",
          "ko": "A shop offers a 25% discount on all items. If a toy car originally costs $40, what is its price after the discount?",
          "zh-CN": "A shop offers a 25% discount on all items. If a toy car originally costs $40, what is its price after the discount?"
        },
        "options": [
          {
            "zh-HK": "A. $10",
            "en": "A. $10",
            "ja": "A. $10",
            "ko": "A. $10",
            "zh-CN": "A. $10"
          },
          {
            "zh-HK": "B. $20",
            "en": "B. $20",
            "ja": "B. $20",
            "ko": "B. $20",
            "zh-CN": "B. $20"
          },
          {
            "zh-HK": "C. $30",
            "en": "C. $30",
            "ja": "C. $30",
            "ko": "C. $30",
            "zh-CN": "C. $30"
          },
          {
            "zh-HK": "D. $35",
            "en": "D. $35",
            "ja": "D. $35",
            "ko": "D. $35",
            "zh-CN": "D. $35"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 14,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "The ratio of boys to girls in a class is 3:2. If there are 18 boys, how many girls are there in the class?",
          "en": "The ratio of boys to girls in a class is 3:2. If there are 18 boys, how many girls are there in the class?",
          "ja": "The ratio of boys to girls in a class is 3:2. If there are 18 boys, how many girls are there in the class?",
          "ko": "The ratio of boys to girls in a class is 3:2. If there are 18 boys, how many girls are there in the class?",
          "zh-CN": "The ratio of boys to girls in a class is 3:2. If there are 18 boys, how many girls are there in the class?"
        },
        "options": [
          {
            "zh-HK": "A. 9",
            "en": "A. 9",
            "ja": "A. 9",
            "ko": "A. 9",
            "zh-CN": "A. 9"
          },
          {
            "zh-HK": "B. 12",
            "en": "B. 12",
            "ja": "B. 12",
            "ko": "B. 12",
            "zh-CN": "B. 12"
          },
          {
            "zh-HK": "C. 15",
            "en": "C. 15",
            "ja": "C. 15",
            "ko": "C. 15",
            "zh-CN": "C. 15"
          },
          {
            "zh-HK": "D. 27",
            "en": "D. 27",
            "ja": "D. 27",
            "ko": "D. 27",
            "zh-CN": "D. 27"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 15,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A recipe requires 2 cups of flour for every 3 cups of sugar. If you use 6 cups of sugar, how much flour do you need?",
          "en": "A recipe requires 2 cups of flour for every 3 cups of sugar. If you use 6 cups of sugar, how much flour do you need?",
          "ja": "A recipe requires 2 cups of flour for every 3 cups of sugar. If you use 6 cups of sugar, how much flour do you need?",
          "ko": "A recipe requires 2 cups of flour for every 3 cups of sugar. If you use 6 cups of sugar, how much flour do you need?",
          "zh-CN": "A recipe requires 2 cups of flour for every 3 cups of sugar. If you use 6 cups of sugar, how much flour do you need?"
        },
        "options": [
          {
            "zh-HK": "A. 2 cups",
            "en": "A. 2 cups",
            "ja": "A. 2 cups",
            "ko": "A. 2 cups",
            "zh-CN": "A. 2 cups"
          },
          {
            "zh-HK": "B. 3 cups",
            "en": "B. 3 cups",
            "ja": "B. 3 cups",
            "ko": "B. 3 cups",
            "zh-CN": "B. 3 cups"
          },
          {
            "zh-HK": "C. 4 cups",
            "en": "C. 4 cups",
            "ja": "C. 4 cups",
            "ko": "C. 4 cups",
            "zh-CN": "C. 4 cups"
          },
          {
            "zh-HK": "D. 6 cups",
            "en": "D. 6 cups",
            "ja": "D. 6 cups",
            "ko": "D. 6 cups",
            "zh-CN": "D. 6 cups"
          }
        ],
        "correctAnswer": 2
      }
    ]
  },
  {
    "grade": "s1",
    "gradeLabel": {
      "zh-HK": "中一",
      "en": "Grade 7",
      "ja": "中学1年",
      "ko": "중학교 1학년",
      "zh-CN": "初中一年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "關於文學作品中的「伏筆」，下列哪項解釋最為準確？",
          "en": "Regarding \"foreshadowing\" in literary works, which of the following explanations is the most accurate?",
          "ja": "文学作品における「伏線」について、以下の説明のうち最も正確なものはどれですか？",
          "ko": "문학 작품 속 '복선'에 대해 다음 설명 중 가장 정확한 것은 무엇입니까?",
          "zh-CN": "关于文学作品中的“伏笔”，下列哪项解释最为准确？"
        },
        "options": [
          {
            "zh-HK": "A. 指作者在故事開頭直接揭示結局的手法。",
            "en": "A. Refers to the author's technique of directly revealing the ending at the beginning of the story.",
            "ja": "A. 作者が物語の冒頭で結末を直接明かす手法を指します。",
            "ko": "A. 작가가 이야기 초반에 결말을 직접적으로 드러내는 기법을 말합니다.",
            "zh-CN": "A. 指作者在故事开头直接揭示结局的手法。"
          },
          {
            "zh-HK": "B. 指作者在情節發展中，預先埋下線索，為後續情節或人物發展作鋪墊。",
            "en": "B. Refers to the author's technique of embedding clues in the plot development to set the stage for subsequent plot or character development.",
            "ja": "B. 作者が物語の展開の中で、後の展開や人物の発展のために事前に手がかりを仕込む手法を指します。",
            "ko": "B. 작가가 줄거리 전개 중에 미리 단서를 심어두어 이후 줄거리나 인물 발전을 위한 복선을 까는 것을 말합니다.",
            "zh-CN": "B. 指作者在情节发展中，预先埋下线索，为后续情节或人物发展作铺垫。"
          },
          {
            "zh-HK": "C. 指作者運用華麗詞藻，使文章更具吸引力。",
            "en": "C. Refers to the author's use of ornate language to make the article more appealing.",
            "ja": "C. 作者が華麗な言葉遣いを用いて、文章をより魅力的にすることを指します。",
            "ko": "C. 작가가 화려한 문체를 사용하여 글을 더욱 매력적으로 만드는 것을 말합니다.",
            "zh-CN": "C. 指作者运用华丽词藻，使文章更具吸引力。"
          },
          {
            "zh-HK": "D. 指作者在作品中插入與主題無關的幽默情節。",
            "en": "D. Refers to the author's insertion of humorous episodes unrelated to the theme in the work.",
            "ja": "D. 作者が作品中にテーマと無関係なユーモラスなエピソードを挿入することを指します。",
            "ko": "D. 작가가 작품 속에 주제와 관련 없는 유머러스한 장면을 삽입하는 것을 말합니다.",
            "zh-CN": "D. 指作者在作品中插入与主题无关的幽默情节。"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "在議論文寫作中，下列哪種論證方法最能有效增強說服力？",
          "en": "In argumentative writing, which of the following argumentation methods is most effective in enhancing persuasiveness?",
          "ja": "議論文の執筆において、以下のどの論証方法が最も説得力を高めるのに効果的ですか？",
          "ko": "논설문 작성 시, 다음 논증 방법 중 설득력을 높이는 데 가장 효과적인 것은 무엇입니까?",
          "zh-CN": "在议论文写作中，下列哪种论证方法最能有效增强说服力？"
        },
        "options": [
          {
            "zh-HK": "A. 舉例論證",
            "en": "A. Argument by example",
            "ja": "A. 例証",
            "ko": "A. 예시 논증",
            "zh-CN": "A. 举例论证"
          },
          {
            "zh-HK": "B. 比喻論證",
            "en": "B. Argument by analogy",
            "ja": "B. 比喩論証",
            "ko": "B. 비유 논증",
            "zh-CN": "B. 比喻论证"
          },
          {
            "zh-HK": "C. 對比論證",
            "en": "C. Argument by contrast",
            "ja": "C. 対比論証",
            "ko": "C. 대비 논증",
            "zh-CN": "C. 对比论证"
          },
          {
            "zh-HK": "D. 引用論證",
            "en": "D. Argument by quotation",
            "ja": "D. 引用論証",
            "ko": "D. 인용 논증",
            "zh-CN": "D. 引用论证"
          }
        ],
        "correctAnswer": 3
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "「感時花濺淚，恨別鳥驚心」這句詩主要運用了哪種修辭手法？",
          "en": "Which rhetorical device is primarily used in the line \"Flowers shed tears when sensing the times, birds are startled when hating separation\"?",
          "ja": "「感時花濺淚，恨別鳥驚心」という詩句は、主にどのような修辞法を用いていますか？",
          "ko": "'감시화천루, 한별조경심' 이 시구는 주로 어떤 수사법을 사용했습니까?",
          "zh-CN": "“感时花溅泪，恨别鸟惊心”这句诗主要运用了哪种修辞手法？"
        },
        "options": [
          {
            "zh-HK": "A. 比喻",
            "en": "A. Metaphor",
            "ja": "A. 比喩",
            "ko": "A. 비유",
            "zh-CN": "A. 比喻"
          },
          {
            "zh-HK": "B. 擬人",
            "en": "B. Personification",
            "ja": "B. 擬人化",
            "ko": "B. 의인화",
            "zh-CN": "B. 拟人"
          },
          {
            "zh-HK": "C. 排比",
            "en": "C. Parallelism",
            "ja": "C. 並列",
            "ko": "C. 배율",
            "zh-CN": "C. 排比"
          },
          {
            "zh-HK": "D. 誇張",
            "en": "D. Hyperbole",
            "ja": "D. 誇張",
            "ko": "D. 과장",
            "zh-CN": "D. 夸张"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "한문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "范仲淹在《岳陽樓記》中提到「先天下之憂而憂，後天下之樂而樂」，這句話表達了作者怎樣的抱負？",
          "en": "In \"Yueyang Lou Ji,\" Fan Zhongyan states, \"To be concerned before anyone else is concerned, and to enjoy after everyone else enjoys.\" What ambition does this line express from the author?",
          "ja": "范仲淹は『岳陽楼記』で「先天下之憂而憂，後天下之樂而樂」と述べていますが、この言葉は作者のどのような抱負を表していますか？",
          "ko": "범중엄은 '악양루기'에서 '천하의 근심을 먼저 근심하고, 천하의 즐거움을 나중에 즐긴다'고 언급했는데, 이 구절은 작가의 어떤 포부를 나타냅니까?",
          "zh-CN": "范仲淹在《岳阳楼记》中提到“先天下之忧而忧，后天下之乐而乐”，这句话表达了作者怎样的抱负？"
        },
        "options": [
          {
            "zh-HK": "A. 追求個人名利",
            "en": "A. Pursuing personal fame and fortune",
            "ja": "A. 個人の名利を追求する",
            "ko": "A. 개인의 명예와 이익을 추구함",
            "zh-CN": "A. 追求个人名利"
          },
          {
            "zh-HK": "B. 寄情山水，隱居避世",
            "en": "B. Indulging in nature, living as a recluse",
            "ja": "B. 山水に心を寄せ、世を避けて隠居する",
            "ko": "B. 자연에 몰두하여 은둔 생활을 함",
            "zh-CN": "B. 寄情山水，隐居避世"
          },
          {
            "zh-HK": "C. 憂國憂民，以天下為己任",
            "en": "C. Worrying about the country and its people, taking the world's responsibility upon oneself",
            "ja": "C. 国を憂い民を憂い、天下を己の任務とする",
            "ko": "C. 나라와 백성을 걱정하며 천하를 자신의 책임으로 여김",
            "zh-CN": "C. 忧国忧民，以天下为己任"
          },
          {
            "zh-HK": "D. 享受生活，及時行樂",
            "en": "D. Enjoying life, living for the moment",
            "ja": "D. 人生を楽しみ、今を生きる",
            "ko": "D. 삶을 즐기고 현재를 즐김",
            "zh-CN": "D. 享受生活，及时 행락"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "漢文",
          "ko": "한문",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "歐陽修在《醉翁亭記》中描寫「環滁皆山也。其西南諸峰，林壑尤美，望之蔚然而深秀者，瑯琊也。」這段文字主要描寫了什麼？",
          "en": "In \"Zui Weng Ting Ji,\" Ouyang Xiu describes, \"All around Chuzhou are mountains. Among its southwestern peaks, the forests and valleys are especially beautiful; what appears lush and deeply elegant is Langya.\" What does this passage primarily describe?",
          "ja": "欧陽修は『酔翁亭記』で「環滁皆山也。其西南諸峰，林壑尤美，望之蔚然而深秀者，瑯琊也。」と描写していますが、この文章は主に何を描写していますか？",
          "ko": "구양수는 '취옹정기'에서 '환저개산야. 기서남제봉, 임학우미, 망지울연이심수자, 낭야야.'라고 묘사했는데, 이 구절은 주로 무엇을 묘사하고 있습니까?",
          "zh-CN": "欧阳修在《醉翁亭记》中描写“环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。”这段文字主要描写了什么？"
        },
        "options": [
          {
            "zh-HK": "A. 滁州百姓的生活",
            "en": "A. The lives of the people of Chuzhou",
            "ja": "A. 滁州の民の生活",
            "ko": "A. 저주 백성들의 삶",
            "zh-CN": "A. 滁州百姓的生活"
          },
          {
            "zh-HK": "B. 醉翁亭的建築特色",
            "en": "B. The architectural features of Zui Weng Ting",
            "ja": "B. 酔翁亭の建築的特徴",
            "ko": "B. 취옹정의 건축적 특징",
            "zh-CN": "B. 醉翁亭的建筑特色"
          },
          {
            "zh-HK": "C. 滁州周圍的自然風光",
            "en": "C. The natural scenery around Chuzhou",
            "ja": "C. 滁州周辺の自然風景",
            "ko": "C. 저주 주변의 자연 풍경",
            "zh-CN": "C. 滁州周围的自然风光"
          },
          {
            "zh-HK": "D. 作者飲酒作樂的情景",
            "en": "D. The scene of the author drinking and enjoying himself",
            "ja": "D. 作者が酒を飲んで楽しむ様子",
            "ko": "D. 작가가 술을 마시며 즐기는 모습",
            "zh-CN": "D. 作者饮酒作乐的情景"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "If I _____ a bird, I would fly to you.",
          "en": "If I _____ a bird, I would fly to you.",
          "ja": "If I _____ a bird, I would fly to you.",
          "ko": "If I _____ a bird, I would fly to you.",
          "zh-CN": "If I _____ a bird, I would fly to you."
        },
        "options": [
          {
            "zh-HK": "A. am",
            "en": "A. am",
            "ja": "A. am",
            "ko": "A. am",
            "zh-CN": "A. am"
          },
          {
            "zh-HK": "B. was",
            "en": "B. was",
            "ja": "B. was",
            "ko": "B. was",
            "zh-CN": "B. was"
          },
          {
            "zh-HK": "C. were",
            "en": "C. were",
            "ja": "C. were",
            "ko": "C. were",
            "zh-CN": "C. were"
          },
          {
            "zh-HK": "D. had been",
            "en": "D. had been",
            "ja": "D. had been",
            "ko": "D. had been",
            "zh-CN": "D. had been"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Which of the following sentences uses a complex sentence structure correctly?",
          "en": "Which of the following sentences uses a complex sentence structure correctly?",
          "ja": "Which of the following sentences uses a complex sentence structure correctly?",
          "ko": "Which of the following sentences uses a complex sentence structure correctly?",
          "zh-CN": "Which of the following sentences uses a complex sentence structure correctly?"
        },
        "options": [
          {
            "zh-HK": "A. She sings well, and he dances gracefully.",
            "en": "A. She sings well, and he dances gracefully.",
            "ja": "A. She sings well, and he dances gracefully.",
            "ko": "A. She sings well, and he dances gracefully.",
            "zh-CN": "A. She sings well, and he dances gracefully."
          },
          {
            "zh-HK": "B. Although it was raining, we went for a walk.",
            "en": "B. Although it was raining, we went for a walk.",
            "ja": "B. Although it was raining, we went for a walk.",
            "ko": "B. Although it was raining, we went for a walk.",
            "zh-CN": "B. Although it was raining, we went for a walk."
          },
          {
            "zh-HK": "C. He is tired but happy.",
            "en": "C. He is tired but happy.",
            "ja": "C. He is tired but happy.",
            "ko": "C. He is tired but happy.",
            "zh-CN": "C. He is tired but happy."
          },
          {
            "zh-HK": "D. The cat slept on the mat.",
            "en": "D. The cat slept on the mat.",
            "ja": "D. The cat slept on the mat.",
            "ko": "D. The cat slept on the mat.",
            "zh-CN": "D. The cat slept on the mat."
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "It is essential that he _____ the report by tomorrow.",
          "en": "It is essential that he _____ the report by tomorrow.",
          "ja": "It is essential that he _____ the report by tomorrow.",
          "ko": "It is essential that he _____ the report by tomorrow.",
          "zh-CN": "It is essential that he _____ the report by tomorrow."
        },
        "options": [
          {
            "zh-HK": "A. finishes",
            "en": "A. finishes",
            "ja": "A. finishes",
            "ko": "A. finishes",
            "zh-CN": "A. finishes"
          },
          {
            "zh-HK": "B. finish",
            "en": "B. finish",
            "ja": "B. finish",
            "ko": "B. finish",
            "zh-CN": "B. finish"
          },
          {
            "zh-HK": "C. finished",
            "en": "C. finished",
            "ja": "C. finished",
            "ko": "C. finished",
            "zh-CN": "C. finished"
          },
          {
            "zh-HK": "D. will finish",
            "en": "D. will finish",
            "ja": "D. will finish",
            "ko": "D. will finish",
            "zh-CN": "D. will finish"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Which of the following is a good technique for writing a persuasive essay?",
          "en": "Which of the following is a good technique for writing a persuasive essay?",
          "ja": "Which of the following is a good technique for writing a persuasive essay?",
          "ko": "Which of the following is a good technique for writing a persuasive essay?",
          "zh-CN": "Which of the following is a good technique for writing a persuasive essay?"
        },
        "options": [
          {
            "zh-HK": "A. Stating your opinion without evidence.",
            "en": "A. Stating your opinion without evidence.",
            "ja": "A. Stating your opinion without evidence.",
            "ko": "A. Stating your opinion without evidence.",
            "zh-CN": "A. Stating your opinion without evidence."
          },
          {
            "zh-HK": "B. Using emotional appeals only.",
            "en": "B. Using emotional appeals only.",
            "ja": "B. Using emotional appeals only.",
            "ko": "B. Using emotional appeals only.",
            "zh-CN": "B. Using emotional appeals only."
          },
          {
            "zh-HK": "C. Presenting counterarguments and refuting them.",
            "en": "C. Presenting counterarguments and refuting them.",
            "ja": "C. Presenting counterarguments and refuting them.",
            "ko": "C. Presenting counterarguments and refuting them.",
            "zh-CN": "C. Presenting counterarguments and refuting them."
          },
          {
            "zh-HK": "D. Repeating your main point multiple times.",
            "en": "D. Repeating your main point multiple times.",
            "ja": "D. Repeating your main point multiple times.",
            "ko": "D. Repeating your main point multiple times.",
            "zh-CN": "D. Repeating your main point multiple times."
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "解方程：3x + 5 = 14",
          "en": "Solve the equation: 3x + 5 = 14",
          "ja": "方程式を解きなさい：3x + 5 = 14",
          "ko": "방정식을 푸시오: 3x + 5 = 14",
          "zh-CN": "解方程：3x + 5 = 14"
        },
        "options": [
          {
            "zh-HK": "A. x = 2",
            "en": "A. x = 2",
            "ja": "A. x = 2",
            "ko": "A. x = 2",
            "zh-CN": "A. x = 2"
          },
          {
            "zh-HK": "B. x = 3",
            "en": "B. x = 3",
            "ja": "B. x = 3",
            "ko": "B. x = 3",
            "zh-CN": "B. x = 3"
          },
          {
            "zh-HK": "C. x = 4",
            "en": "C. x = 4",
            "ja": "C. x = 4",
            "ko": "C. x = 4",
            "zh-CN": "C. x = 4"
          },
          {
            "zh-HK": "D. x = 5",
            "en": "D. x = 5",
            "ja": "D. x = 5",
            "ko": "D. x = 5",
            "zh-CN": "D. x = 5"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "一個三角形的三個內角分別是 x, 2x 和 3x。求 x 的值。",
          "en": "The three interior angles of a triangle are x, 2x, and 3x respectively. Find the value of x.",
          "ja": "三角形の3つの内角がそれぞれ x, 2x, 3x です。x の値を求めなさい。",
          "ko": "삼각형의 세 내각이 각각 x, 2x, 3x입니다. x의 값을 구하시오.",
          "zh-CN": "一个三角形的三个内角分别是 x, 2x 和 3x。求 x 的值。"
        },
        "options": [
          {
            "zh-HK": "A. 15°",
            "en": "A. 15°",
            "ja": "A. 15°",
            "ko": "A. 15°",
            "zh-CN": "A. 15°"
          },
          {
            "zh-HK": "B. 30°",
            "en": "B. 30°",
            "ja": "B. 30°",
            "ko": "B. 30°",
            "zh-CN": "B. 30°"
          },
          {
            "zh-HK": "C. 45°",
            "en": "C. 45°",
            "ja": "C. 45°",
            "ko": "C. 45°",
            "zh-CN": "C. 45°"
          },
          {
            "zh-HK": "D. 60°",
            "en": "D. 60°",
            "ja": "D. 60°",
            "ko": "D. 60°",
            "zh-CN": "D. 60°"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 12,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "計算：(-5) + 8 - (-2)",
          "en": "Calculate: (-5) + 8 - (-2)",
          "ja": "計算しなさい：(-5) + 8 - (-2)",
          "ko": "계산하시오: (-5) + 8 - (-2)",
          "zh-CN": "计算：(-5) + 8 - (-2)"
        },
        "options": [
          {
            "zh-HK": "A. 1",
            "en": "A. 1",
            "ja": "A. 1",
            "ko": "A. 1",
            "zh-CN": "A. 1"
          },
          {
            "zh-HK": "B. 5",
            "en": "B. 5",
            "ja": "B. 5",
            "ko": "B. 5",
            "zh-CN": "B. 5"
          },
          {
            "zh-HK": "C. -1",
            "en": "C. -1",
            "ja": "C. -1",
            "ko": "C. -1",
            "zh-CN": "C. -1"
          },
          {
            "zh-HK": "D. -5",
            "en": "D. -5",
            "ja": "D. -5",
            "ko": "D. -5",
            "zh-CN": "D. -5"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 13,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A rectangle has a length of (2x + 3) cm and a width of (x - 1) cm. If the perimeter of the rectangle is 28 cm, find the value of x.",
          "en": "A rectangle has a length of (2x + 3) cm and a width of (x - 1) cm. If the perimeter of the rectangle is 28 cm, find the value of x.",
          "ja": "A rectangle has a length of (2x + 3) cm and a width of (x - 1) cm. If the perimeter of the rectangle is 28 cm, find the value of x.",
          "ko": "A rectangle has a length of (2x + 3) cm and a width of (x - 1) cm. If the perimeter of the rectangle is 28 cm, find the value of x.",
          "zh-CN": "A rectangle has a length of (2x + 3) cm and a width of (x - 1) cm. If the perimeter of the rectangle is 28 cm, find the value of x."
        },
        "options": [
          {
            "zh-HK": "A. 3",
            "en": "A. 3",
            "ja": "A. 3",
            "ko": "A. 3",
            "zh-CN": "A. 3"
          },
          {
            "zh-HK": "B. 4",
            "en": "B. 4",
            "ja": "B. 4",
            "ko": "B. 4",
            "zh-CN": "B. 4"
          },
          {
            "zh-HK": "C. 5",
            "en": "C. 5",
            "ja": "C. 5",
            "ko": "C. 5",
            "zh-CN": "C. 5"
          },
          {
            "zh-HK": "D. 6",
            "en": "D. 6",
            "ja": "D. 6",
            "ko": "D. 6",
            "zh-CN": "D. 6"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 14,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "The sum of three consecutive integers is 45. What is the smallest integer?",
          "en": "The sum of three consecutive integers is 45. What is the smallest integer?",
          "ja": "The sum of three consecutive integers is 45. What is the smallest integer?",
          "ko": "The sum of three consecutive integers is 45. What is the smallest integer?",
          "zh-CN": "The sum of three consecutive integers is 45. What is the smallest integer?"
        },
        "options": [
          {
            "zh-HK": "A. 13",
            "en": "A. 13",
            "ja": "A. 13",
            "ko": "A. 13",
            "zh-CN": "A. 13"
          },
          {
            "zh-HK": "B. 14",
            "en": "B. 14",
            "ja": "B. 14",
            "ko": "B. 14",
            "zh-CN": "B. 14"
          },
          {
            "zh-HK": "C. 15",
            "en": "C. 15",
            "ja": "C. 15",
            "ko": "C. 15",
            "zh-CN": "C. 15"
          },
          {
            "zh-HK": "D. 16",
            "en": "D. 16",
            "ja": "D. 16",
            "ko": "D. 16",
            "zh-CN": "D. 16"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 15,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A square has a side length of 7 cm. If its side length is increased by 3 cm, what is the increase in its area?",
          "en": "A square has a side length of 7 cm. If its side length is increased by 3 cm, what is the increase in its area?",
          "ja": "A square has a side length of 7 cm. If its side length is increased by 3 cm, what is the increase in its area?",
          "ko": "A square has a side length of 7 cm. If its side length is increased by 3 cm, what is the increase in its area?",
          "zh-CN": "A square has a side length of 7 cm. If its side length is increased by 3 cm, what is the increase in its area?"
        },
        "options": [
          {
            "zh-HK": "A. 9 cm²",
            "en": "A. 9 cm²",
            "ja": "A. 9 cm²",
            "ko": "A. 9 cm²",
            "zh-CN": "A. 9 cm²"
          },
          {
            "zh-HK": "B. 21 cm²",
            "en": "B. 21 cm²",
            "ja": "B. 21 cm²",
            "ko": "B. 21 cm²",
            "zh-CN": "B. 21 cm²"
          },
          {
            "zh-HK": "C. 39 cm²",
            "en": "C. 39 cm²",
            "ja": "C. 39 cm²",
            "ko": "C. 39 cm²",
            "zh-CN": "C. 39 cm²"
          },
          {
            "zh-HK": "D. 51 cm²",
            "en": "D. 51 cm²",
            "ja": "D. 51 cm²",
            "ko": "D. 51 cm²",
            "zh-CN": "D. 51 cm²"
          }
        ],
        "correctAnswer": 3
      }
    ]
  },
  {
    "grade": "s2",
    "gradeLabel": {
      "zh-HK": "中二",
      "en": "Grade 8",
      "ja": "中学2年",
      "ko": "중학교 2학년",
      "zh-CN": "初中二年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "「明月松間照，清泉石上流」運用了哪種修辭手法？",
          "en": "Which rhetorical device is used in 'Bright moon shines through pine trees, clear spring flows over rocks'?",
          "ja": "「明月松間照，清泉石上流」はどのような修辞法を使用していますか？",
          "ko": "'밝은 달은 소나무 사이를 비추고, 맑은 샘물은 바위 위를 흐른다'는 어떤 수사법을 사용했는가?",
          "zh-CN": "“明月松间照，清泉石上流”运用了哪种修辞手法？"
        },
        "options": [
          {
            "zh-HK": "A. 比喻",
            "en": "A. Metaphor",
            "ja": "A. 比喩",
            "ko": "A. 은유",
            "zh-CN": "A. 比喻"
          },
          {
            "zh-HK": "B. 擬人",
            "en": "B. Personification",
            "ja": "B. 擬人化",
            "ko": "B. 의인화",
            "zh-CN": "B. 拟人"
          },
          {
            "zh-HK": "C. 對偶",
            "en": "C. Antithesis",
            "ja": "C. 対句",
            "ko": "C. 대구",
            "zh-CN": "C. 对偶"
          },
          {
            "zh-HK": "D. 誇張",
            "en": "D. Hyperbole",
            "ja": "D. 誇張",
            "ko": "D. 과장",
            "zh-CN": "D. 夸张"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "議論文的論證方法中，哪一種是透過列舉事例來證明論點？",
          "en": "Among the argumentation methods in argumentative essays, which one proves the argument by listing examples?",
          "ja": "議論文の論証方法の中で、事例を挙げて論点を証明するのはどれですか？",
          "ko": "논증문에서 논증 방법 중 어떤 것이 사례를 들어 논점을 증명하는가?",
          "zh-CN": "议论文的论证方法中，哪一种是通过列举事例来证明论点？"
        },
        "options": [
          {
            "zh-HK": "A. 舉例論證",
            "en": "A. Argument by example",
            "ja": "A. 例証",
            "ko": "A. 예시 논증",
            "zh-CN": "A. 举例论证"
          },
          {
            "zh-HK": "B. 引用論證",
            "en": "B. Argument by quotation",
            "ja": "B. 引用論証",
            "ko": "B. 인용 논증",
            "zh-CN": "B. 引用论证"
          },
          {
            "zh-HK": "C. 對比論證",
            "en": "C. Argument by comparison",
            "ja": "C. 対比論証",
            "ko": "C. 대비 논증",
            "zh-CN": "C. 对比论证"
          },
          {
            "zh-HK": "D. 歸納論證",
            "en": "D. Inductive argument",
            "ja": "D. 帰納論証",
            "ko": "D. 귀납 논증",
            "zh-CN": "D. 归纳论证"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "「但願人長久，千里共嬋娟」表達了作者怎樣的情感？",
          "en": "What kind of emotion does the author express in 'May we live long and share the moon across a thousand miles'?",
          "ja": "「但願人長久，千里共嬋娟」は作者のどのような感情を表していますか？",
          "ko": "'사람들이 오래 살기를 바라며, 천 리 밖에서도 아름다운 달을 함께 보기를 원한다'는 작가의 어떤 감정을 표현하는가?",
          "zh-CN": "“但愿人长久，千里共婵娟”表达了作者怎样的情感？"
        },
        "options": [
          {
            "zh-HK": "A. 懷才不遇",
            "en": "A. Unrecognized talent",
            "ja": "A. 才能が認められない",
            "ko": "A. 재능을 인정받지 못함",
            "zh-CN": "A. 怀才不遇"
          },
          {
            "zh-HK": "B. 思念親友",
            "en": "B. Missing relatives and friends",
            "ja": "B. 親友を思う",
            "ko": "B. 친우를 그리워함",
            "zh-CN": "B. 思念亲友"
          },
          {
            "zh-HK": "C. 壯志未酬",
            "en": "C. Unfulfilled ambitions",
            "ja": "C. 志が果たされない",
            "ko": "C. 뜻을 이루지 못함",
            "zh-CN": "C. 壮志未酬"
          },
          {
            "zh-HK": "D. 隱居避世",
            "en": "D. Retreating from society",
            "ja": "D. 世を避けて隠居する",
            "ko": "D. 세상을 피해 은거함",
            "zh-CN": "D. 隐居避世"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "《出師表》中，諸葛亮勸諫劉禪要「親賢臣，遠小人」，其目的是什麼？",
          "en": "In 'Chu Shi Biao', what was Zhuge Liang's purpose in advising Liu Shan to 'befriend worthy ministers and keep away from petty individuals'?",
          "ja": "『出師表』の中で、諸葛亮が劉禅に「賢臣を親しみ、小人を遠ざける」と諫めた目的は何ですか？",
          "ko": "'출사표'에서 제갈량이 유선에게 '현명한 신하를 가까이하고 소인을 멀리하라'고 간언한 목적은 무엇인가?",
          "zh-CN": "《出师表》中，诸葛亮劝谏刘禅要“亲贤臣，远小人”，其目的是什么？"
        },
        "options": [
          {
            "zh-HK": "A. 鞏固皇權",
            "en": "A. Consolidate imperial power",
            "ja": "A. 皇権の強化",
            "ko": "A. 황권을 공고히 함",
            "zh-CN": "A. 巩固皇权"
          },
          {
            "zh-HK": "B. 國家興盛",
            "en": "B. National prosperity",
            "ja": "B. 国家の繁栄",
            "ko": "B. 국가의 번영",
            "zh-CN": "B. 国家兴盛"
          },
          {
            "zh-HK": "C. 培養人才",
            "en": "C. Cultivate talents",
            "ja": "C. 人材育成",
            "ko": "C. 인재 양성",
            "zh-CN": "C. 培养人才"
          },
          {
            "zh-HK": "D. 消除異己",
            "en": "D. Eliminate dissidents",
            "ja": "D. 異己の排除",
            "ko": "D. 이견을 제거함",
            "zh-CN": "D. 消除异己"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "《桃花源記》中，漁人初入桃花源時，看到「土地平曠，屋舍儼然」，這描寫了怎樣的景象？",
          "en": "In 'The Peach Blossom Spring', when the fisherman first entered Peach Blossom Spring, he saw 'the land was flat and spacious, and the houses were orderly'. What kind of scene does this describe?",
          "ja": "『桃花源記』の中で、漁師が初めて桃花源に入った時、「土地は平坦で広々としており、家々は整然としていた」と描写されていますが、これはどのような光景ですか？",
          "ko": "'도화원기'에서 어부가 처음 도화원에 들어섰을 때 '땅은 평평하고 넓으며, 집들은 정연했다'고 묘사되었는데, 이는 어떤 풍경을 묘사하는가?",
          "zh-CN": "《桃花源记》中，渔人初入桃花源时，看到“土地平旷，屋舍俨然”，这描写了怎样的景象？"
        },
        "options": [
          {
            "zh-HK": "A. 戰亂頻繁",
            "en": "A. Frequent wars",
            "ja": "A. 戦乱が頻繁",
            "ko": "A. 전쟁이 빈번함",
            "zh-CN": "A. 战乱频繁"
          },
          {
            "zh-HK": "B. 荒蕪破敗",
            "en": "B. Desolate and ruined",
            "ja": "B. 荒廃している",
            "ko": "B. 황폐하고 파괴됨",
            "zh-CN": "B. 荒芜破败"
          },
          {
            "zh-HK": "C. 和平富庶",
            "en": "C. Peaceful and prosperous",
            "ja": "C. 平和で豊か",
            "ko": "C. 평화롭고 풍요로움",
            "zh-CN": "C. 和平富庶"
          },
          {
            "zh-HK": "D. 隱秘閉塞",
            "en": "D. Hidden and secluded",
            "ja": "D. 隠れて閉鎖的",
            "ko": "D. 숨겨져 폐쇄적임",
            "zh-CN": "D. 隐秘闭塞"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "If I _____ a bird, I would fly to you.",
          "en": "If I _____ a bird, I would fly to you.",
          "ja": "If I _____ a bird, I would fly to you.",
          "ko": "If I _____ a bird, I would fly to you.",
          "zh-CN": "If I _____ a bird, I would fly to you."
        },
        "options": [
          {
            "zh-HK": "A. am",
            "en": "A. am",
            "ja": "A. am",
            "ko": "A. am",
            "zh-CN": "A. am"
          },
          {
            "zh-HK": "B. was",
            "en": "B. was",
            "ja": "B. was",
            "ko": "B. was",
            "zh-CN": "B. was"
          },
          {
            "zh-HK": "C. were",
            "en": "C. were",
            "ja": "C. were",
            "ko": "C. were",
            "zh-CN": "C. were"
          },
          {
            "zh-HK": "D. had been",
            "en": "D. had been",
            "ja": "D. had been",
            "ko": "D. had been",
            "zh-CN": "D. had been"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "She said, 'I am going to the library tomorrow.' Convert this to reported speech.",
          "en": "She said, 'I am going to the library tomorrow.' Convert this to reported speech.",
          "ja": "She said, 'I am going to the library tomorrow.' Convert this to reported speech.",
          "ko": "She said, 'I am going to the library tomorrow.' Convert this to reported speech.",
          "zh-CN": "She said, 'I am going to the library tomorrow.' Convert this to reported speech."
        },
        "options": [
          {
            "zh-HK": "A. She said that she is going to the library tomorrow.",
            "en": "A. She said that she is going to the library tomorrow.",
            "ja": "A. She said that she is going to the library tomorrow.",
            "ko": "A. She said that she is going to the library tomorrow.",
            "zh-CN": "A. She said that she is going to the library tomorrow."
          },
          {
            "zh-HK": "B. She said that she was going to the library the next day.",
            "en": "B. She said that she was going to the library the next day.",
            "ja": "B. She said that she was going to the library the next day.",
            "ko": "B. She said that she was going to the library the next day.",
            "zh-CN": "B. She said that she was going to the library the next day."
          },
          {
            "zh-HK": "C. She said that I am going to the library tomorrow.",
            "en": "C. She said that I am going to the library tomorrow.",
            "ja": "C. She said that I am going to the library tomorrow.",
            "ko": "C. She said that I am going to the library tomorrow.",
            "zh-CN": "C. She said that I am going to the library tomorrow."
          },
          {
            "zh-HK": "D. She said that she will go to the library the next day.",
            "en": "D. She said that she will go to the library the next day.",
            "ja": "D. She said that she will go to the library the next day.",
            "ko": "D. She said that she will go to the library the next day.",
            "zh-CN": "D. She said that she will go to the library the next day."
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Read the following passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world, covering an enormous area across South America. It is home to an incredible diversity of wildlife, including millions of species of insects, thousands of species of plants, and hundreds of species of mammals and birds. The rainforest plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen.'\n\nWhat is the main idea of this passage?",
          "en": "Read the following passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world, covering an enormous area across South America. It is home to an incredible diversity of wildlife, including millions of species of insects, thousands of species of plants, and hundreds of species of mammals and birds. The rainforest plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen.'\n\nWhat is the main idea of this passage?",
          "ja": "Read the following passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world, covering an enormous area across South America. It is home to an incredible diversity of wildlife, including millions of species of insects, thousands of species of plants, and hundreds of species of mammals and birds. The rainforest plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen.'\n\nWhat is the main idea of this passage?",
          "ko": "Read the following passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world, covering an enormous area across South America. It is home to an incredible diversity of wildlife, including millions of species of insects, thousands of species of plants, and hundreds of species of mammals and birds. The rainforest plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen.'\n\nWhat is the main idea of this passage?",
          "zh-CN": "Read the following passage and answer the question:\n\n'The Amazon rainforest is the largest rainforest in the world, covering an enormous area across South America. It is home to an incredible diversity of wildlife, including millions of species of insects, thousands of species of plants, and hundreds of species of mammals and birds. The rainforest plays a crucial role in regulating the Earth's climate by absorbing vast amounts of carbon dioxide and producing oxygen.'\n\nWhat is the main idea of this passage?"
        },
        "options": [
          {
            "zh-HK": "A. The Amazon rainforest is facing deforestation.",
            "en": "A. The Amazon rainforest is facing deforestation.",
            "ja": "A. The Amazon rainforest is facing deforestation.",
            "ko": "A. The Amazon rainforest is facing deforestation.",
            "zh-CN": "A. The Amazon rainforest is facing deforestation."
          },
          {
            "zh-HK": "B. The Amazon rainforest is important for its biodiversity and climate regulation.",
            "en": "B. The Amazon rainforest is important for its biodiversity and climate regulation.",
            "ja": "B. The Amazon rainforest is important for its biodiversity and climate regulation.",
            "ko": "B. The Amazon rainforest is important for its biodiversity and climate regulation.",
            "zh-CN": "B. The Amazon rainforest is important for its biodiversity and climate regulation."
          },
          {
            "zh-HK": "C. The Amazon rainforest is located in South America.",
            "en": "C. The Amazon rainforest is located in South America.",
            "ja": "C. The Amazon rainforest is located in South America.",
            "ko": "C. The Amazon rainforest is located in South America.",
            "zh-CN": "C. The Amazon rainforest is located in South America."
          },
          {
            "zh-HK": "D. The Amazon rainforest has many types of insects.",
            "en": "D. The Amazon rainforest has many types of insects.",
            "ja": "D. The Amazon rainforest has many types of insects.",
            "ko": "D. The Amazon rainforest has many types of insects.",
            "zh-CN": "D. The Amazon rainforest has many types of insects."
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "I wish I _____ more time to travel the world.",
          "en": "I wish I _____ more time to travel the world.",
          "ja": "I wish I _____ more time to travel the world.",
          "ko": "I wish I _____ more time to travel the world.",
          "zh-CN": "I wish I _____ more time to travel the world."
        },
        "options": [
          {
            "zh-HK": "A. have",
            "en": "A. have",
            "ja": "A. have",
            "ko": "A. have",
            "zh-CN": "A. have"
          },
          {
            "zh-HK": "B. had",
            "en": "B. had",
            "ja": "B. had",
            "ko": "B. had",
            "zh-CN": "B. had"
          },
          {
            "zh-HK": "C. will have",
            "en": "C. will have",
            "ja": "C. will have",
            "ko": "C. will have",
            "zh-CN": "C. will have"
          },
          {
            "zh-HK": "D. would have",
            "en": "D. would have",
            "ja": "D. would have",
            "ko": "D. would have",
            "zh-CN": "D. would have"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "解二次方程 $x^2 - 5x + 6 = 0$。",
          "en": "Solve the quadratic equation $x^2 - 5x + 6 = 0$.",
          "ja": "二次方程式 $x^2 - 5x + 6 = 0$ を解きなさい。",
          "ko": "이차 방정식 $x^2 - 5x + 6 = 0$을 푸시오.",
          "zh-CN": "解二次方程 $x^2 - 5x + 6 = 0$。"
        },
        "options": [
          {
            "zh-HK": "A. $x=2, x=3$",
            "en": "A. $x=2, x=3$",
            "ja": "A. $x=2, x=3$",
            "ko": "A. $x=2, x=3$",
            "zh-CN": "A. $x=2, x=3$"
          },
          {
            "zh-HK": "B. $x=-2, x=-3$",
            "en": "B. $x=-2, x=-3$",
            "ja": "B. $x=-2, x=-3$",
            "ko": "B. $x=-2, x=-3$",
            "zh-CN": "B. $x=-2, x=-3$"
          },
          {
            "zh-HK": "C. $x=1, x=6$",
            "en": "C. $x=1, x=6$",
            "ja": "C. $x=1, x=6$",
            "ko": "C. $x=1, x=6$",
            "zh-CN": "C. $x=1, x=6$"
          },
          {
            "zh-HK": "D. $x=-1, x=-6$",
            "en": "D. $x=-1, x=-6$",
            "ja": "D. $x=-1, x=-6$",
            "ko": "D. $x=-1, x=-6$",
            "zh-CN": "D. $x=-1, x=-6$"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "若兩個三角形相似，且它們的對應邊長比為 1:2，則它們的面積比為多少？",
          "en": "If two triangles are similar and the ratio of their corresponding side lengths is 1:2, what is the ratio of their areas?",
          "ja": "2つの三角形が相似で、対応する辺の長さの比が1:2である場合、面積の比はいくつですか？",
          "ko": "두 삼각형이 닮았고 대응하는 변의 길이의 비가 1:2라면, 넓이의 비는 얼마인가?",
          "zh-CN": "若两个三角形相似，且它们的对应边长比为 1:2，则它们的面积比为多少？"
        },
        "options": [
          {
            "zh-HK": "A. 1:2",
            "en": "A. 1:2",
            "ja": "A. 1:2",
            "ko": "A. 1:2",
            "zh-CN": "A. 1:2"
          },
          {
            "zh-HK": "B. 1:3",
            "en": "B. 1:3",
            "ja": "B. 1:3",
            "ko": "B. 1:3",
            "zh-CN": "B. 1:3"
          },
          {
            "zh-HK": "C. 1:4",
            "en": "C. 1:4",
            "ja": "C. 1:4",
            "ko": "C. 1:4",
            "zh-CN": "C. 1:4"
          },
          {
            "zh-HK": "D. 1:8",
            "en": "D. 1:8",
            "ja": "D. 1:8",
            "ko": "D. 1:8",
            "zh-CN": "D. 1:8"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 12,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "以下哪項是描述一組數據集中趨勢的量度？",
          "en": "Which of the following is a measure of central tendency for a set of data?",
          "ja": "次のうち、データセットの中心傾向を記述する尺度はどれですか？",
          "ko": "다음 중 데이터 세트의 중심 경향을 나타내는 측정값은 무엇인가?",
          "zh-CN": "以下哪项是描述一组数据集中趋势的量度？"
        },
        "options": [
          {
            "zh-HK": "A. 標準差",
            "en": "A. Standard deviation",
            "ja": "A. 標準偏差",
            "ko": "A. 표준 편차",
            "zh-CN": "A. 标准差"
          },
          {
            "zh-HK": "B. 方差",
            "en": "B. Variance",
            "ja": "B. 分散",
            "ko": "B. 분산",
            "zh-CN": "B. 方差"
          },
          {
            "zh-HK": "C. 中位數",
            "en": "C. Median",
            "ja": "C. 中央値",
            "ko": "C. 중앙값",
            "zh-CN": "C. 中位数"
          },
          {
            "zh-HK": "D. 全距",
            "en": "D. Range",
            "ja": "D. 範囲",
            "ko": "D. 범위",
            "zh-CN": "D. 全距"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 13,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "The sum of two numbers is 10 and their product is 24. Which quadratic equation represents this situation?",
          "en": "The sum of two numbers is 10 and their product is 24. Which quadratic equation represents this situation?",
          "ja": "The sum of two numbers is 10 and their product is 24. Which quadratic equation represents this situation?",
          "ko": "The sum of two numbers is 10 and their product is 24. Which quadratic equation represents this situation?",
          "zh-CN": "The sum of two numbers is 10 and their product is 24. Which quadratic equation represents this situation?"
        },
        "options": [
          {
            "zh-HK": "A. $x^2 + 10x + 24 = 0$",
            "en": "A. $x^2 + 10x + 24 = 0$",
            "ja": "A. $x^2 + 10x + 24 = 0$",
            "ko": "A. $x^2 + 10x + 24 = 0$",
            "zh-CN": "A. $x^2 + 10x + 24 = 0$"
          },
          {
            "zh-HK": "B. $x^2 - 10x + 24 = 0$",
            "en": "B. $x^2 - 10x + 24 = 0$",
            "ja": "B. $x^2 - 10x + 24 = 0$",
            "ko": "B. $x^2 - 10x + 24 = 0$",
            "zh-CN": "B. $x^2 - 10x + 24 = 0$"
          },
          {
            "zh-HK": "C. $x^2 + 10x - 24 = 0$",
            "en": "C. $x^2 + 10x - 24 = 0$",
            "ja": "C. $x^2 + 10x - 24 = 0$",
            "ko": "C. $x^2 + 10x - 24 = 0$",
            "zh-CN": "C. $x^2 + 10x - 24 = 0$"
          },
          {
            "zh-HK": "D. $x^2 - 10x - 24 = 0$",
            "en": "D. $x^2 - 10x - 24 = 0$",
            "ja": "D. $x^2 - 10x - 24 = 0$",
            "ko": "D. $x^2 - 10x - 24 = 0$",
            "zh-CN": "D. $x^2 - 10x - 24 = 0$"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 14,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A class of 20 students took a math test. The average score was 75. If one student who scored 90 was removed, what would be the new average score for the remaining students?",
          "en": "A class of 20 students took a math test. The average score was 75. If one student who scored 90 was removed, what would be the new average score for the remaining students?",
          "ja": "A class of 20 students took a math test. The average score was 75. If one student who scored 90 was removed, what would be the new average score for the remaining students?",
          "ko": "A class of 20 students took a math test. The average score was 75. If one student who scored 90 was removed, what would be the new average score for the remaining students?",
          "zh-CN": "A class of 20 students took a math test. The average score was 75. If one student who scored 90 was removed, what would be the new average score for the remaining students?"
        },
        "options": [
          {
            "zh-HK": "A. 74",
            "en": "A. 74",
            "ja": "A. 74",
            "ko": "A. 74",
            "zh-CN": "A. 74"
          },
          {
            "zh-HK": "B. 74.5",
            "en": "B. 74.5",
            "ja": "B. 74.5",
            "ko": "B. 74.5",
            "zh-CN": "B. 74.5"
          },
          {
            "zh-HK": "C. 75",
            "en": "C. 75",
            "ja": "C. 75",
            "ko": "C. 75",
            "zh-CN": "C. 75"
          },
          {
            "zh-HK": "D. 75.5",
            "en": "D. 75.5",
            "ja": "D. 75.5",
            "ko": "D. 75.5",
            "zh-CN": "D. 75.5"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 15,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A rectangular garden has a length that is 5 meters more than its width. If the area of the garden is 84 square meters, what is the width of the garden?",
          "en": "A rectangular garden has a length that is 5 meters more than its width. If the area of the garden is 84 square meters, what is the width of the garden?",
          "ja": "A rectangular garden has a length that is 5 meters more than its width. If the area of the garden is 84 square meters, what is the width of the garden?",
          "ko": "A rectangular garden has a length that is 5 meters more than its width. If the area of the garden is 84 square meters, what is the width of the garden?",
          "zh-CN": "A rectangular garden has a length that is 5 meters more than its width. If the area of the garden is 84 square meters, what is the width of the garden?"
        },
        "options": [
          {
            "zh-HK": "A. 7 meters",
            "en": "A. 7 meters",
            "ja": "A. 7 meters",
            "ko": "A. 7 meters",
            "zh-CN": "A. 7 meters"
          },
          {
            "zh-HK": "B. 8 meters",
            "en": "B. 8 meters",
            "ja": "B. 8 meters",
            "ko": "B. 8 meters",
            "zh-CN": "B. 8 meters"
          },
          {
            "zh-HK": "C. 12 meters",
            "en": "C. 12 meters",
            "ja": "C. 12 meters",
            "ko": "C. 12 meters",
            "zh-CN": "C. 12 meters"
          },
          {
            "zh-HK": "D. 14 meters",
            "en": "D. 14 meters",
            "ja": "D. 14 meters",
            "ko": "D. 14 meters",
            "zh-CN": "D. 14 meters"
          }
        ],
        "correctAnswer": 0
      }
    ]
  },
  {
    "grade": "s3",
    "gradeLabel": {
      "zh-HK": "中三",
      "en": "Grade 9",
      "ja": "中学3年",
      "ko": "중학교 3학년",
      "zh-CN": "初中三年级"
    },
    "questions": [
      {
        "id": 1,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "以下哪項最能說明魯迅小說《阿Q正傳》中「精神勝利法」的含義？",
          "en": "Which best explains the 'spiritual victory method' in Lu Xun's 'The True Story of Ah Q'?",
          "ja": "魯迅の小説「阿Q正伝」における「精神的勝利法」の意味を最もよく説明しているのはどれですか？",
          "ko": "루쉰의 소설 '아Q정전'에서 '정신적 승리법'의 의미를 가장 잘 설명한 것은 무엇입니까?",
          "zh-CN": "以下哪项最能说明鲁迅小说《阿Q正传》中「精神胜利法」的含义？"
        },
        "options": [
          {
            "zh-HK": "A. 以實際行動反抗壓迫",
            "en": "A. Resisting oppression through action",
            "ja": "A. 実際の行動で抑圧に抵抗する",
            "ko": "A. 실제 행동으로 억압에 저항하다",
            "zh-CN": "A. 以实际行动反抗压迫"
          },
          {
            "zh-HK": "B. 以自我欺騙方式化解失敗感",
            "en": "B. Using self-deception to cope with failure",
            "ja": "B. 自己欺瞞で失敗感を和らげる",
            "ko": "B. 자기기만으로 실패감을 극복하다",
            "zh-CN": "B. 以自我欺骗方式化解失败感"
          },
          {
            "zh-HK": "C. 以智慧克服困難",
            "en": "C. Overcoming difficulties with wisdom",
            "ja": "C. 知恵で困難を克服する",
            "ko": "C. 지혜로 어려움을 극복하다",
            "zh-CN": "C. 以智慧克服困难"
          },
          {
            "zh-HK": "D. 以忍耐換取成功",
            "en": "D. Achieving success through endurance",
            "ja": "D. 忍耐で成功を勝ち取る",
            "ko": "D. 인내로 성공을 얻다",
            "zh-CN": "D. 以忍耐换取成功"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 2,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "「橫眉冷對千夫指，俯首甘為孺子牛」出自哪位作家？",
          "en": "Who wrote 'Brow furrowed, I defy a thousand pointing fingers; head bowed, I serve the children like an ox'?",
          "ja": "「眉をひそめて千人の指差しに対し、頭を垂れて子供たちの牛となる」は誰の作品ですか？",
          "ko": "「눈살을 찌푸리며 천 명의 손가락질에 맞서고, 머리를 숙여 아이들의 소가 된다」는 누구의 작품입니까?",
          "zh-CN": "「横眉冷对千夫指，俯首甘为孺子牛」出自哪位作家？"
        },
        "options": [
          {
            "zh-HK": "A. 郭沫若",
            "en": "A. Guo Moruo",
            "ja": "A. 郭沫若",
            "ko": "A. 궈모뤄",
            "zh-CN": "A. 郭沫若"
          },
          {
            "zh-HK": "B. 魯迅",
            "en": "B. Lu Xun",
            "ja": "B. 魯迅",
            "ko": "B. 루쉰",
            "zh-CN": "B. 鲁迅"
          },
          {
            "zh-HK": "C. 巴金",
            "en": "C. Ba Jin",
            "ja": "C. 巴金",
            "ko": "C. 바진",
            "zh-CN": "C. 巴金"
          },
          {
            "zh-HK": "D. 老舍",
            "en": "D. Lao She",
            "ja": "D. 老舎",
            "ko": "D. 라오서",
            "zh-CN": "D. 老舍"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 3,
        "subject": {
          "zh-HK": "中文",
          "en": "Chinese",
          "ja": "中国語",
          "ko": "중국어",
          "zh-CN": "中文"
        },
        "question": {
          "zh-HK": "以下哪種修辭手法在「問君能有幾多愁，恰似一江春水向東流」中使用？",
          "en": "Which rhetorical device is used in 'How much sorrow can you have? Just like a river of spring water flowing east'?",
          "ja": "「君はどれほどの悲しみを持てるか、まるで春の川が東へ流れるように」で使われている修辞技法はどれですか？",
          "ko": "「그대의 슬픔이 얼마나 될까, 마치 봄 강물이 동쪽으로 흐르는 것처럼」에서 사용된 수사법은 무엇입니까?",
          "zh-CN": "以下哪种修辞手法在「问君能有几多愁，恰似一江春水向东流」中使用？"
        },
        "options": [
          {
            "zh-HK": "A. 擬人",
            "en": "A. Personification",
            "ja": "A. 擬人化",
            "ko": "A. 의인화",
            "zh-CN": "A. 拟人"
          },
          {
            "zh-HK": "B. 誇張",
            "en": "B. Hyperbole",
            "ja": "B. 誇張",
            "ko": "B. 과장",
            "zh-CN": "B. 夸张"
          },
          {
            "zh-HK": "C. 比喻",
            "en": "C. Metaphor/Simile",
            "ja": "C. 比喩",
            "ko": "C. 비유",
            "zh-CN": "C. 比喻"
          },
          {
            "zh-HK": "D. 排比",
            "en": "D. Parallelism",
            "ja": "D. 並列",
            "ko": "D. 병렬",
            "zh-CN": "D. 排比"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 4,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "《廉頗藺相如列傳》中，藺相如以「先國家之急而後私仇」為由，如何對待廉頗？",
          "en": "In 'Biographies of Lian Po and Lin Xiangru', how did Lin Xiangru treat Lian Po, citing 'putting national interests before personal grudges'?",
          "ja": "「廉頗藺相如列伝」で、藺相如は「国家の急を先にして私怨を後にする」を理由に、廉頗をどのように扱いましたか？",
          "ko": "「염파인상여열전」에서 인상여는 '국가의 급함을 먼저 하고 사적인 원한을 나중에 한다'는 이유로 염파를 어떻게 대했습니까?",
          "zh-CN": "《廉颇蔺相如列传》中，蔺相如以「先国家之急而后私仇」为由，如何对待廉颇？"
        },
        "options": [
          {
            "zh-HK": "A. 主動與廉頗爭鬥",
            "en": "A. Actively fought with Lian Po",
            "ja": "A. 廉頗と積極的に争った",
            "ko": "A. 염파와 적극적으로 싸웠다",
            "zh-CN": "A. 主动与廉颇争斗"
          },
          {
            "zh-HK": "B. 刻意迴避廉頗",
            "en": "B. Deliberately avoided Lian Po",
            "ja": "B. 意図的に廉頗を避けた",
            "ko": "B. 의도적으로 염파를 피했다",
            "zh-CN": "B. 刻意回避廉颇"
          },
          {
            "zh-HK": "C. 向趙王投訴廉頗",
            "en": "C. Complained to the King about Lian Po",
            "ja": "C. 趙王に廉頗を訴えた",
            "ko": "C. 왕에게 염파를 고소했다",
            "zh-CN": "C. 向赵王投诉廉颇"
          },
          {
            "zh-HK": "D. 主動向廉頗道歉",
            "en": "D. Proactively apologized to Lian Po",
            "ja": "D. 廉頗に積極的に謝罪した",
            "ko": "D. 염파에게 적극적으로 사과했다",
            "zh-CN": "D. 主动向廉颇道歉"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 5,
        "subject": {
          "zh-HK": "文言文",
          "en": "Classical Chinese",
          "ja": "古典中国語",
          "ko": "고전 중국어",
          "zh-CN": "文言文"
        },
        "question": {
          "zh-HK": "《赤壁賦》中「寄蜉蝣於天地，渺滄海之一粟」表達了什麼思想？",
          "en": "In 'Ode to the Red Cliff', what idea does 'like mayflies in heaven and earth, a grain in the vast ocean' express?",
          "ja": "「赤壁賦」の「天地に蜉蝣を寄せ、滄海の一粟に過ぎない」はどのような思想を表していますか？",
          "ko": "「적벽부」에서 '천지에 하루살이를 붙이고, 창해의 한 알 좁쌀'은 어떤 사상을 표현합니까?",
          "zh-CN": "《赤壁赋》中「寄蜉蝣于天地，渺沧海之一粟」表达了什么思想？"
        },
        "options": [
          {
            "zh-HK": "A. 人生短暫渺小的感慨",
            "en": "A. Lamenting the brevity and insignificance of human life",
            "ja": "A. 人生の短さと小ささへの嘆き",
            "ko": "A. 인생의 짧음과 보잘것없음에 대한 탄식",
            "zh-CN": "A. 人生短暂渺小的感慨"
          },
          {
            "zh-HK": "B. 對自然景色的讚美",
            "en": "B. Praising the natural scenery",
            "ja": "B. 自然の景色への賛美",
            "ko": "B. 자연 경치에 대한 찬미",
            "zh-CN": "B. 对自然景色的赞美"
          },
          {
            "zh-HK": "C. 對歷史英雄的崇拜",
            "en": "C. Admiring historical heroes",
            "ja": "C. 歴史的英雄への崇拝",
            "ko": "C. 역사적 영웅에 대한 숭배",
            "zh-CN": "C. 对历史英雄的崇拜"
          },
          {
            "zh-HK": "D. 對政治失意的憤慨",
            "en": "D. Indignation over political setbacks",
            "ja": "D. 政治的挫折への憤り",
            "ko": "D. 정치적 실의에 대한 분개",
            "zh-CN": "D. 对政治失意的愤慨"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 6,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Choose the correct form: 'The committee _____ unable to reach a consensus despite hours of debate.'",
          "en": "Choose the correct form: 'The committee _____ unable to reach a consensus despite hours of debate.'",
          "ja": "Choose the correct form: 'The committee _____ unable to reach a consensus despite hours of debate.'",
          "ko": "Choose the correct form: 'The committee _____ unable to reach a consensus despite hours of debate.'",
          "zh-CN": "Choose the correct form: 'The committee _____ unable to reach a consensus despite hours of debate.'"
        },
        "options": [
          {
            "zh-HK": "A. were",
            "en": "A. were",
            "ja": "A. were",
            "ko": "A. were",
            "zh-CN": "A. were"
          },
          {
            "zh-HK": "B. was",
            "en": "B. was",
            "ja": "B. was",
            "ko": "B. was",
            "zh-CN": "B. was"
          },
          {
            "zh-HK": "C. are",
            "en": "C. are",
            "ja": "C. are",
            "ko": "C. are",
            "zh-CN": "C. are"
          },
          {
            "zh-HK": "D. have been",
            "en": "D. have been",
            "ja": "D. have been",
            "ko": "D. have been",
            "zh-CN": "D. have been"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 7,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Identify the rhetorical device: 'The wind whispered secrets through the ancient trees.'",
          "en": "Identify the rhetorical device: 'The wind whispered secrets through the ancient trees.'",
          "ja": "Identify the rhetorical device: 'The wind whispered secrets through the ancient trees.'",
          "ko": "Identify the rhetorical device: 'The wind whispered secrets through the ancient trees.'",
          "zh-CN": "Identify the rhetorical device: 'The wind whispered secrets through the ancient trees.'"
        },
        "options": [
          {
            "zh-HK": "A. Simile",
            "en": "A. Simile",
            "ja": "A. Simile",
            "ko": "A. Simile",
            "zh-CN": "A. Simile"
          },
          {
            "zh-HK": "B. Metaphor",
            "en": "B. Metaphor",
            "ja": "B. Metaphor",
            "ko": "B. Metaphor",
            "zh-CN": "B. Metaphor"
          },
          {
            "zh-HK": "C. Personification",
            "en": "C. Personification",
            "ja": "C. Personification",
            "ko": "C. Personification",
            "zh-CN": "C. Personification"
          },
          {
            "zh-HK": "D. Hyperbole",
            "en": "D. Hyperbole",
            "ja": "D. Hyperbole",
            "ko": "D. Hyperbole",
            "zh-CN": "D. Hyperbole"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 8,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Choose the correct sentence: Which uses the subjunctive mood correctly?",
          "en": "Choose the correct sentence: Which uses the subjunctive mood correctly?",
          "ja": "Choose the correct sentence: Which uses the subjunctive mood correctly?",
          "ko": "Choose the correct sentence: Which uses the subjunctive mood correctly?",
          "zh-CN": "Choose the correct sentence: Which uses the subjunctive mood correctly?"
        },
        "options": [
          {
            "zh-HK": "A. If I was you, I would apologize.",
            "en": "A. If I was you, I would apologize.",
            "ja": "A. If I was you, I would apologize.",
            "ko": "A. If I was you, I would apologize.",
            "zh-CN": "A. If I was you, I would apologize."
          },
          {
            "zh-HK": "B. If I were you, I would apologize.",
            "en": "B. If I were you, I would apologize.",
            "ja": "B. If I were you, I would apologize.",
            "ko": "B. If I were you, I would apologize.",
            "zh-CN": "B. If I were you, I would apologize."
          },
          {
            "zh-HK": "C. If I am you, I would apologize.",
            "en": "C. If I am you, I would apologize.",
            "ja": "C. If I am you, I would apologize.",
            "ko": "C. If I am you, I would apologize.",
            "zh-CN": "C. If I am you, I would apologize."
          },
          {
            "zh-HK": "D. If I be you, I would apologize.",
            "en": "D. If I be you, I would apologize.",
            "ja": "D. If I be you, I would apologize.",
            "ko": "D. If I be you, I would apologize.",
            "zh-CN": "D. If I be you, I would apologize."
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 9,
        "subject": {
          "zh-HK": "English",
          "en": "English",
          "ja": "English",
          "ko": "English",
          "zh-CN": "English"
        },
        "question": {
          "zh-HK": "Which sentence correctly uses a relative clause? 'The scientist _____ discovered penicillin won the Nobel Prize.'",
          "en": "Which sentence correctly uses a relative clause? 'The scientist _____ discovered penicillin won the Nobel Prize.'",
          "ja": "Which sentence correctly uses a relative clause? 'The scientist _____ discovered penicillin won the Nobel Prize.'",
          "ko": "Which sentence correctly uses a relative clause? 'The scientist _____ discovered penicillin won the Nobel Prize.'",
          "zh-CN": "Which sentence correctly uses a relative clause? 'The scientist _____ discovered penicillin won the Nobel Prize.'"
        },
        "options": [
          {
            "zh-HK": "A. which",
            "en": "A. which",
            "ja": "A. which",
            "ko": "A. which",
            "zh-CN": "A. which"
          },
          {
            "zh-HK": "B. whom",
            "en": "B. whom",
            "ja": "B. whom",
            "ko": "B. whom",
            "zh-CN": "B. whom"
          },
          {
            "zh-HK": "C. who",
            "en": "C. who",
            "ja": "C. who",
            "ko": "C. who",
            "zh-CN": "C. who"
          },
          {
            "zh-HK": "D. whose",
            "en": "D. whose",
            "ja": "D. whose",
            "ko": "D. whose",
            "zh-CN": "D. whose"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 10,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "在直角三角形中，若兩條直角邊分別為 5 cm 和 12 cm，斜邊長度是多少？",
          "en": "In a right triangle, if the two legs are 5 cm and 12 cm, what is the length of the hypotenuse?",
          "ja": "直角三角形で、2つの直角辺がそれぞれ5cmと12cmの場合、斜辺の長さは何cmですか？",
          "ko": "직각삼각형에서 두 직각변이 각각 5cm와 12cm일 때, 빗변의 길이는 얼마입니까?",
          "zh-CN": "在直角三角形中，若两条直角边分别为5cm和12cm，斜边长度是多少？"
        },
        "options": [
          {
            "zh-HK": "A. 13 cm",
            "en": "A. 13 cm",
            "ja": "A. 13 cm",
            "ko": "A. 13 cm",
            "zh-CN": "A. 13 cm"
          },
          {
            "zh-HK": "B. 15 cm",
            "en": "B. 15 cm",
            "ja": "B. 15 cm",
            "ko": "B. 15 cm",
            "zh-CN": "B. 15 cm"
          },
          {
            "zh-HK": "C. 17 cm",
            "en": "C. 17 cm",
            "ja": "C. 17 cm",
            "ko": "C. 17 cm",
            "zh-CN": "C. 17 cm"
          },
          {
            "zh-HK": "D. 11 cm",
            "en": "D. 11 cm",
            "ja": "D. 11 cm",
            "ko": "D. 11 cm",
            "zh-CN": "D. 11 cm"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 11,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "解方程：2x² - 5x - 3 = 0，x 的值是？",
          "en": "Solve: 2x² - 5x - 3 = 0, what are the values of x?",
          "ja": "方程式 2x² - 5x - 3 = 0 を解くと、x の値は？",
          "ko": "방정식 2x² - 5x - 3 = 0을 풀면, x의 값은?",
          "zh-CN": "解方程：2x² - 5x - 3 = 0，x 的值是？"
        },
        "options": [
          {
            "zh-HK": "A. x = 3 或 x = -1/2",
            "en": "A. x = 3 or x = -1/2",
            "ja": "A. x = 3 または x = -1/2",
            "ko": "A. x = 3 또는 x = -1/2",
            "zh-CN": "A. x = 3 或 x = -1/2"
          },
          {
            "zh-HK": "B. x = -3 或 x = 1/2",
            "en": "B. x = -3 or x = 1/2",
            "ja": "B. x = -3 または x = 1/2",
            "ko": "B. x = -3 또는 x = 1/2",
            "zh-CN": "B. x = -3 或 x = 1/2"
          },
          {
            "zh-HK": "C. x = 3 或 x = 1/2",
            "en": "C. x = 3 or x = 1/2",
            "ja": "C. x = 3 または x = 1/2",
            "ko": "C. x = 3 또는 x = 1/2",
            "zh-CN": "C. x = 3 或 x = 1/2"
          },
          {
            "zh-HK": "D. x = -3 或 x = -1/2",
            "en": "D. x = -3 or x = -1/2",
            "ja": "D. x = -3 または x = -1/2",
            "ko": "D. x = -3 또는 x = -1/2",
            "zh-CN": "D. x = -3 或 x = -1/2"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 12,
        "subject": {
          "zh-HK": "數學",
          "en": "Mathematics",
          "ja": "数学",
          "ko": "수학",
          "zh-CN": "数学"
        },
        "question": {
          "zh-HK": "一個圓的半徑為 7 cm，其面積是多少？（取 π ≈ 3.14）",
          "en": "A circle has radius 7 cm. What is its area? (Use π ≈ 3.14)",
          "ja": "半径7cmの円の面積は？（π ≈ 3.14 を使用）",
          "ko": "반지름이 7cm인 원의 넓이는? (π ≈ 3.14 사용)",
          "zh-CN": "一个圆的半径为7cm，其面积是多少？（取π≈3.14）"
        },
        "options": [
          {
            "zh-HK": "A. 153.86 cm²",
            "en": "A. 153.86 cm²",
            "ja": "A. 153.86 cm²",
            "ko": "A. 153.86 cm²",
            "zh-CN": "A. 153.86 cm²"
          },
          {
            "zh-HK": "B. 43.96 cm²",
            "en": "B. 43.96 cm²",
            "ja": "B. 43.96 cm²",
            "ko": "B. 43.96 cm²",
            "zh-CN": "B. 43.96 cm²"
          },
          {
            "zh-HK": "C. 98.00 cm²",
            "en": "C. 98.00 cm²",
            "ja": "C. 98.00 cm²",
            "ko": "C. 98.00 cm²",
            "zh-CN": "C. 98.00 cm²"
          },
          {
            "zh-HK": "D. 21.98 cm²",
            "en": "D. 21.98 cm²",
            "ja": "D. 21.98 cm²",
            "ko": "D. 21.98 cm²",
            "zh-CN": "D. 21.98 cm²"
          }
        ],
        "correctAnswer": 0
      },
      {
        "id": 13,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "A train travels at 80 km/h. How long does it take to travel 200 km?",
          "en": "A train travels at 80 km/h. How long does it take to travel 200 km?",
          "ja": "A train travels at 80 km/h. How long does it take to travel 200 km?",
          "ko": "A train travels at 80 km/h. How long does it take to travel 200 km?",
          "zh-CN": "A train travels at 80 km/h. How long does it take to travel 200 km?"
        },
        "options": [
          {
            "zh-HK": "A. 2 hours",
            "en": "A. 2 hours",
            "ja": "A. 2 hours",
            "ko": "A. 2 hours",
            "zh-CN": "A. 2 hours"
          },
          {
            "zh-HK": "B. 2.5 hours",
            "en": "B. 2.5 hours",
            "ja": "B. 2.5 hours",
            "ko": "B. 2.5 hours",
            "zh-CN": "B. 2.5 hours"
          },
          {
            "zh-HK": "C. 3 hours",
            "en": "C. 3 hours",
            "ja": "C. 3 hours",
            "ko": "C. 3 hours",
            "zh-CN": "C. 3 hours"
          },
          {
            "zh-HK": "D. 1.5 hours",
            "en": "D. 1.5 hours",
            "ja": "D. 1.5 hours",
            "ko": "D. 1.5 hours",
            "zh-CN": "D. 1.5 hours"
          }
        ],
        "correctAnswer": 1
      },
      {
        "id": 14,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "The probability of drawing a red card from a standard deck of 52 cards is:",
          "en": "The probability of drawing a red card from a standard deck of 52 cards is:",
          "ja": "The probability of drawing a red card from a standard deck of 52 cards is:",
          "ko": "The probability of drawing a red card from a standard deck of 52 cards is:",
          "zh-CN": "The probability of drawing a red card from a standard deck of 52 cards is:"
        },
        "options": [
          {
            "zh-HK": "A. 1/4",
            "en": "A. 1/4",
            "ja": "A. 1/4",
            "ko": "A. 1/4",
            "zh-CN": "A. 1/4"
          },
          {
            "zh-HK": "B. 1/3",
            "en": "B. 1/3",
            "ja": "B. 1/3",
            "ko": "B. 1/3",
            "zh-CN": "B. 1/3"
          },
          {
            "zh-HK": "C. 1/2",
            "en": "C. 1/2",
            "ja": "C. 1/2",
            "ko": "C. 1/2",
            "zh-CN": "C. 1/2"
          },
          {
            "zh-HK": "D. 2/3",
            "en": "D. 2/3",
            "ja": "D. 2/3",
            "ko": "D. 2/3",
            "zh-CN": "D. 2/3"
          }
        ],
        "correctAnswer": 2
      },
      {
        "id": 15,
        "subject": {
          "zh-HK": "English Math",
          "en": "English Math",
          "ja": "English Math",
          "ko": "English Math",
          "zh-CN": "English Math"
        },
        "question": {
          "zh-HK": "If sin(30°) = 0.5, what is the value of sin(150°)?",
          "en": "If sin(30°) = 0.5, what is the value of sin(150°)?",
          "ja": "If sin(30°) = 0.5, what is the value of sin(150°)?",
          "ko": "If sin(30°) = 0.5, what is the value of sin(150°)?",
          "zh-CN": "If sin(30°) = 0.5, what is the value of sin(150°)?"
        },
        "options": [
          {
            "zh-HK": "A. -0.5",
            "en": "A. -0.5",
            "ja": "A. -0.5",
            "ko": "A. -0.5",
            "zh-CN": "A. -0.5"
          },
          {
            "zh-HK": "B. 0",
            "en": "B. 0",
            "ja": "B. 0",
            "ko": "B. 0",
            "zh-CN": "B. 0"
          },
          {
            "zh-HK": "C. 0.5",
            "en": "C. 0.5",
            "ja": "C. 0.5",
            "ko": "C. 0.5",
            "zh-CN": "C. 0.5"
          },
          {
            "zh-HK": "D. 1",
            "en": "D. 1",
            "ja": "D. 1",
            "ko": "D. 1",
            "zh-CN": "D. 1"
          }
        ],
        "correctAnswer": 2
      }
    ]
  }
];
