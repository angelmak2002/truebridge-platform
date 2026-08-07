export interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number; // 0-3 index
}

export interface GradeExercises {
  grade: string;
  gradeLabel: string;
  questions: Question[];
}

export const exercisesData: GradeExercises[] = [
  {
    grade: "p1",
    gradeLabel: "小一",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "找出句子中的錯別字：「妹妹在公完裏開心地玩耍。」",
        options: ["A. 妹", "B. 完", "C. 裏", "D. 耍"],
        correctAnswer: 1
      },
      {
        id: 2,
        subject: "中文",
        question: "哪一個字的部首與「河」字相同？",
        options: ["A. 可", "B. 汗", "C. 奇", "D. 何"],
        correctAnswer: 1
      },
      {
        id: 3,
        subject: "中文",
        question: "選擇適當的量詞：「天上有一（ ）新月。」",
        options: ["A. 把", "B. 條", "C. 彎", "D. 輪"],
        correctAnswer: 2
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「學而時習之，不亦說乎？」中「說」的意思是什麼？",
        options: ["A. 說話", "B. 高興", "C. 解釋", "D. 講述"],
        correctAnswer: 1
      },
      {
        id: 5,
        subject: "文言文",
        question: "「有朋自遠方來，不亦樂乎？」這句話出自哪部經典？",
        options: ["A. 《孟子》", "B. 《論語》", "C. 《詩經》", "D. 《楚辭》"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "Choose the correct word: \"I have an _____.",
        options: ["A. book", "B. umbrella", "C. pen", "D. ruler"],
        correctAnswer: 1
      },
      {
        id: 7,
        subject: "英文",
        question: "Which word is a color?",
        options: ["A. Table", "B. Purple", "C. Happy", "D. Jump"],
        correctAnswer: 1
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "18 + 7 - 5 = ?",
        options: ["A. 20", "B. 22", "C. 24", "D. 25"],
        correctAnswer: 1
      },
      {
        id: 9,
        subject: "數學",
        question: "小明有 15 粒糖，吃了 4 粒，媽媽又給了他 3 粒，他現在有多少粒糖？",
        options: ["A. 11", "B. 14", "C. 18", "D. 22"],
        correctAnswer: 1
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"How many _____ are there in the box?\" (There are 5 toys.)",
        options: ["A. toy", "B. toys", "C. a toy", "D. toyes"],
        correctAnswer: 1
      },
      {
        id: 11,
        subject: "中文",
        question: "哪一個字的筆畫最少？",
        options: ["A. 一", "B. 人", "C. 大", "D. 天"],
        correctAnswer: 0
      },
      {
        id: 12,
        subject: "文言文",
        question: "「之」在文言文中通常表示什麼？",
        options: ["A. 到達", "B. 代詞（他/她/它）", "C. 動作", "D. 時間"],
        correctAnswer: 1
      },
      {
        id: 13,
        subject: "英文",
        question: "\"How many _____ are there in the box?\"",
        options: ["A. toy", "B. toys", "C. a toy", "D. toyes"],
        correctAnswer: 1
      },
      {
        id: 14,
        subject: "數學",
        question: "哪一個數目最大？",
        options: ["A. 45", "B. 54", "C. 39", "D. 49"],
        correctAnswer: 1
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"5 + 3 = ?\" What is the answer in English?",
        options: ["A. Seven", "B. Eight", "C. Nine", "D. Ten"],
        correctAnswer: 1
      }
    ]
  },
  {
    grade: "p2",
    gradeLabel: "小二",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個詞語的讀音與「長大」的「長」相同？",
        options: ["A. 長度", "B. 班長", "C. 長短", "D. 長江"],
        correctAnswer: 1
      },
      {
        id: 2,
        subject: "中文",
        question: "選擇適當的連接詞：「（ ）下雨了，（ ）我們不去公園。」",
        options: ["A. 因為……所以……", "B. 雖然……但是……", "C. 不但……而且……", "D. 如果……就……"],
        correctAnswer: 0
      },
      {
        id: 3,
        subject: "中文",
        question: "找出錯別字：「他每天都準時交功課，是一個好學牛。」",
        options: ["A. 準", "B. 功", "C. 課", "D. 牛"],
        correctAnswer: 3
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「子曰」在文言文中是什麼意思？",
        options: ["A. 孩子說", "B. 先生說", "C. 老師說", "D. 聖人說"],
        correctAnswer: 2
      },
      {
        id: 5,
        subject: "文言文",
        question: "「曰」在文言文中表示什麼？",
        options: ["A. 日期", "B. 說", "C. 詢問", "D. 命令"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "\"_____ is your favorite subject?\"",
        options: ["A. Who", "B. What", "C. Where", "D. How"],
        correctAnswer: 1
      },
      {
        id: 7,
        subject: "英文",
        question: "Choose the correct plural form of \"child\".",
        options: ["A. childs", "B. childrens", "C. children", "D. childes"],
        correctAnswer: 2
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "4 x 6 + 5 = ?",
        options: ["A. 24", "B. 29", "C. 34", "D. 44"],
        correctAnswer: 1
      },
      {
        id: 9,
        subject: "數學",
        question: "一盒餅乾有 8 塊，3 盒共有多少塊？",
        options: ["A. 11", "B. 24", "C. 32", "D. 16"],
        correctAnswer: 1
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"If you have 10 apples and eat 3, how many are left?\"",
        options: ["A. 5", "B. 6", "C. 7", "D. 8"],
        correctAnswer: 2
      },
      {
        id: 11,
        subject: "中文",
        question: "「馬」的部首是什麼？",
        options: ["A. 馬", "B. 口", "C. 亠", "D. 冖"],
        correctAnswer: 0
      },
      {
        id: 12,
        subject: "文言文",
        question: "「也」在文言文中通常是什麼詞性？",
        options: ["A. 名詞", "B. 動詞", "C. 語氣詞", "D. 介詞"],
        correctAnswer: 2
      },
      {
        id: 13,
        subject: "英文",
        question: "\"She _____ playing tennis every Sunday.\"",
        options: ["A. is", "B. am", "C. are", "D. likes"],
        correctAnswer: 0
      },
      {
        id: 14,
        subject: "數學",
        question: "50 - 27 + 12 = ?",
        options: ["A. 23", "B. 35", "C. 11", "D. 89"],
        correctAnswer: 1
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"What is 20 ÷ 4?\" The answer is:",
        options: ["A. Two", "B. Three", "C. Four", "D. Five"],
        correctAnswer: 3
      }
    ]
  },
  {
    grade: "p3",
    gradeLabel: "小三",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個成語的意思是「比喻做事沒有恆心」？",
        options: ["A. 半途而廢", "B. 堅持不懈", "C. 守株待兔", "D. 拔苗助長"],
        correctAnswer: 0
      },
      {
        id: 2,
        subject: "中文",
        question: "選擇適當的標點符號：「你今天吃了早餐嗎（ ）」",
        options: ["A. 。", "B. ，", "C. ！", "D. ？"],
        correctAnswer: 3
      },
      {
        id: 3,
        subject: "中文",
        question: "哪一個字的部首與「打」字不同？",
        options: ["A. 拍", "B. 提", "C. 找", "D. 釘"],
        correctAnswer: 3
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「乎」在文言文中通常是什麼詞性？",
        options: ["A. 名詞", "B. 動詞", "C. 語氣詞", "D. 介詞"],
        correctAnswer: 2
      },
      {
        id: 5,
        subject: "文言文",
        question: "「焉」在文言文中可以表示什麼？",
        options: ["A. 只有名詞", "B. 代詞或語氣詞", "C. 只有動詞", "D. 只有形容詞"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "\"Yesterday, I _____ to the park with my friends.\"",
        options: ["A. go", "B. goes", "C. went", "D. going"],
        correctAnswer: 2
      },
      {
        id: 7,
        subject: "英文",
        question: "\"The elephant is _____ than the mouse.\"",
        options: ["A. big", "B. bigger", "C. biggest", "D. more big"],
        correctAnswer: 1
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "125 + 348 - 100 = ?",
        options: ["A. 373", "B. 473", "C. 273", "D. 573"],
        correctAnswer: 0
      },
      {
        id: 9,
        subject: "數學",
        question: "72 ÷ 8 x 2 = ?",
        options: ["A. 9", "B. 18", "C. 4", "D. 16"],
        correctAnswer: 1
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"A rectangle has length 10 cm and width 5 cm. What is its area?\"",
        options: ["A. 30 cm²", "B. 50 cm²", "C. 60 cm²", "D. 100 cm²"],
        correctAnswer: 1
      },
      {
        id: 11,
        subject: "中文",
        question: "「成語」是什麼？",
        options: ["A. 單個字", "B. 兩個字的詞", "C. 四個字的固定短語", "D. 長句子"],
        correctAnswer: 2
      },
      {
        id: 12,
        subject: "文言文",
        question: "「而」在文言文中可以表示什麼？",
        options: ["A. 只有連接", "B. 轉折或連接", "C. 只有轉折", "D. 只有修飾"],
        correctAnswer: 1
      },
      {
        id: 13,
        subject: "英文",
        question: "Choose the correct preposition: \"The book is _____ the table.\"",
        options: ["A. in", "B. on", "C. at", "D. under"],
        correctAnswer: 1
      },
      {
        id: 14,
        subject: "數學",
        question: "一個正方形的周界是 20 厘米，它的邊長是多少？",
        options: ["A. 4 厘米", "B. 5 厘米", "C. 10 厘米", "D. 20 厘米"],
        correctAnswer: 1
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"If a book costs $12 and you buy 3 books, how much do you spend?\"",
        options: ["A. $24", "B. $30", "C. $36", "D. $48"],
        correctAnswer: 2
      }
    ]
  },
  {
    grade: "p4",
    gradeLabel: "小四",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個詞語沒有錯別字？",
        options: ["A. 興高彩烈", "B. 迫不急待", "C. 刻不容緩", "D. 莫名奇秒"],
        correctAnswer: 2
      },
      {
        id: 2,
        subject: "中文",
        question: "「這座山高聳入雲，真壯觀啊！」這句話運用了哪種修辭手法？",
        options: ["A. 擬人", "B. 誇張", "C. 比喻", "D. 排比"],
        correctAnswer: 1
      },
      {
        id: 3,
        subject: "中文",
        question: "哪一個字的筆畫數目最多？",
        options: ["A. 龜", "B. 龍", "C. 鳳", "D. 麟"],
        correctAnswer: 3
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「以」在文言文中可以表示什麼？",
        options: ["A. 只有介詞", "B. 介詞或連詞", "C. 只有連詞", "D. 只有名詞"],
        correctAnswer: 1
      },
      {
        id: 5,
        subject: "文言文",
        question: "「其」在文言文中可以表示什麼？",
        options: ["A. 只有代詞", "B. 代詞或語氣詞", "C. 只有語氣詞", "D. 只有名詞"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "\"If it rains tomorrow, we _____ stay at home.\"",
        options: ["A. will", "B. would", "C. are", "D. have"],
        correctAnswer: 0
      },
      {
        id: 7,
        subject: "英文",
        question: "\"She has been living here _____ 2010.\"",
        options: ["A. for", "B. since", "C. in", "D. from"],
        correctAnswer: 1
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "3⁄4 + 1⁄4 - 1⁄2 = ?",
        options: ["A. 1⁄2", "B. 1", "C. 0", "D. 1⁄4"],
        correctAnswer: 0
      },
      {
        id: 9,
        subject: "數學",
        question: "一個長方形的長是 10 厘米，闊是 5 厘米，面積是多少？",
        options: ["A. 15 平方厘米", "B. 30 平方厘米", "C. 50 平方厘米", "D. 100 平方厘米"],
        correctAnswer: 2
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"What is 25% of 80?\"",
        options: ["A. 15", "B. 20", "C. 25", "D. 30"],
        correctAnswer: 1
      },
      {
        id: 11,
        subject: "中文",
        question: "「修辭手法」有哪些？",
        options: ["A. 只有比喻", "B. 比喻、擬人、誇張等", "C. 只有擬人", "D. 只有排比"],
        correctAnswer: 1
      },
      {
        id: 12,
        subject: "文言文",
        question: "「於」在文言文中通常是什麼詞性？",
        options: ["A. 名詞", "B. 動詞", "C. 介詞", "D. 形容詞"],
        correctAnswer: 2
      },
      {
        id: 13,
        subject: "英文",
        question: "Choose the correct relative pronoun: \"The boy _____ is wearing a red shirt is my brother.\"",
        options: ["A. which", "B. who", "C. whose", "D. whom"],
        correctAnswer: 1
      },
      {
        id: 14,
        subject: "數學",
        question: "一個圓形的半徑是 3 厘米，它的周界是多少？（取 π ≈ 3.14）",
        options: ["A. 9.42 厘米", "B. 18.84 厘米", "C. 28.26 厘米", "D. 6.28 厘米"],
        correctAnswer: 1
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"If a shirt costs $150 and there is a 20% discount, what is the sale price?\"",
        options: ["A. $100", "B. $120", "C. $130", "D. $140"],
        correctAnswer: 1
      }
    ]
  },
  {
    grade: "p5",
    gradeLabel: "小五",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個詞語最能形容「堅持不懈，努力不放棄」？",
        options: ["A. 半途而廢", "B. 持之以恆", "C. 朝三暮四", "D. 三心二意"],
        correctAnswer: 1
      },
      {
        id: 2,
        subject: "中文",
        question: "「他的文章寫得非常生動，彷彿把讀者帶進了另一個世界。」這句話運用了什麼修辭手法？",
        options: ["A. 擬人", "B. 比喻", "C. 誇張", "D. 排比"],
        correctAnswer: 1
      },
      {
        id: 3,
        subject: "中文",
        question: "選擇最適當的詞語填空：「他的成績突飛猛進，進步（ ）。」",
        options: ["A. 顯著", "B. 明顯", "C. 迅速", "D. 快速"],
        correctAnswer: 0
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「所」在文言文中通常表示什麼？",
        options: ["A. 地方", "B. 所有", "C. 被動或名詞化", "D. 時間"],
        correctAnswer: 2
      },
      {
        id: 5,
        subject: "文言文",
        question: "「為」在文言文中可以表示什麼？",
        options: ["A. 只有動詞", "B. 動詞或介詞", "C. 只有介詞", "D. 只有名詞"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "\"By the time you arrive, I _____ finished my homework.\"",
        options: ["A. will finish", "B. will have finished", "C. finish", "D. have finished"],
        correctAnswer: 1
      },
      {
        id: 7,
        subject: "英文",
        question: "\"The teacher asked the students _____ their homework on time.\"",
        options: ["A. to submit", "B. submit", "C. submitting", "D. submitted"],
        correctAnswer: 0
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "一個圓形的面積是 78.5 平方厘米，它的半徑是多少？（取 π ≈ 3.14）",
        options: ["A. 5 厘米", "B. 10 厘米", "C. 15 厘米", "D. 20 厘米"],
        correctAnswer: 0
      },
      {
        id: 9,
        subject: "數學",
        question: "一個長方體的長、闊、高分別是 10 厘米、5 厘米和 4 厘米，它的體積是多少？",
        options: ["A. 100 立方厘米", "B. 150 立方厘米", "C. 200 立方厘米", "D. 250 立方厘米"],
        correctAnswer: 2
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"A number's 25% is 50. What is the number?\"",
        options: ["A. 100", "B. 150", "C. 200", "D. 250"],
        correctAnswer: 2
      },
      {
        id: 11,
        subject: "中文",
        question: "「排比」修辭手法的特點是什麼？",
        options: ["A. 重複使用相同的句式", "B. 誇大事實", "C. 擬人化", "D. 直接比較"],
        correctAnswer: 0
      },
      {
        id: 12,
        subject: "文言文",
        question: "「者」在文言文中通常表示什麼？",
        options: ["A. 地方", "B. 時間", "C. 人或事物", "D. 動作"],
        correctAnswer: 2
      },
      {
        id: 13,
        subject: "英文",
        question: "\"Despite _____ hard, he didn't pass the exam.\"",
        options: ["A. study", "B. studying", "C. to study", "D. studied"],
        correctAnswer: 1
      },
      {
        id: 14,
        subject: "數學",
        question: "一個數的 25% 是 50，這個數是多少？",
        options: ["A. 100", "B. 150", "C. 200", "D. 250"],
        correctAnswer: 2
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"If you have $100 and spend 30%, how much is left?\"",
        options: ["A. $60", "B. $70", "C. $80", "D. $90"],
        correctAnswer: 1
      }
    ]
  },
  {
    grade: "p6",
    gradeLabel: "小六",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個成語最能形容「做事認真，一絲不苟」？",
        options: ["A. 馬馬虎虎", "B. 一絲不苟", "C. 敷衍了事", "D. 草草了事"],
        correctAnswer: 1
      },
      {
        id: 2,
        subject: "中文",
        question: "「知識就像一盞燈，照亮我們前進的道路。」這句話運用了什麼修辭手法？",
        options: ["A. 擬人", "B. 比喻", "C. 誇張", "D. 排比"],
        correctAnswer: 1
      },
      {
        id: 3,
        subject: "中文",
        question: "選擇最適當的詞語填空：「他的決定（ ）了所有人的期望。」",
        options: ["A. 超越", "B. 超過", "C. 超出", "D. 超越"],
        correctAnswer: 2
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「不」在文言文中通常表示什麼？",
        options: ["A. 只有否定", "B. 否定或不是", "C. 只有不是", "D. 只有肯定"],
        correctAnswer: 1
      },
      {
        id: 5,
        subject: "文言文",
        question: "「矣」在文言文中通常是什麼詞性？",
        options: ["A. 名詞", "B. 動詞", "C. 語氣詞", "D. 介詞"],
        correctAnswer: 2
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "\"I wish I _____ more time to study for the exam.\"",
        options: ["A. have", "B. had", "C. would have", "D. have had"],
        correctAnswer: 1
      },
      {
        id: 7,
        subject: "英文",
        question: "\"The book, _____ was published last year, became a bestseller.\"",
        options: ["A. which", "B. that", "C. who", "D. whose"],
        correctAnswer: 0
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "一個梯形的上底是 5 厘米，下底是 10 厘米，高是 4 厘米，它的面積是多少？",
        options: ["A. 20 平方厘米", "B. 30 平方厘米", "C. 40 平方厘米", "D. 50 平方厘米"],
        correctAnswer: 1
      },
      {
        id: 9,
        subject: "數學",
        question: "一個圓柱體的底面半徑是 3 厘米，高是 10 厘米，它的體積是多少？（取 π ≈ 3.14）",
        options: ["A. 282.6 立方厘米", "B. 565.2 立方厘米", "C. 847.8 立方厘米", "D. 1130.4 立方厘米"],
        correctAnswer: 0
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"A bag contains 3 red balls and 2 blue balls. What is the probability of drawing a red ball?\"",
        options: ["A. 1⁄2", "B. 3⁄5", "C. 2⁄5", "D. 1⁄3"],
        correctAnswer: 1
      },
      {
        id: 11,
        subject: "中文",
        question: "「比喻」修辭手法需要什麼三個要素？",
        options: ["A. 本體、喻體、比喻詞", "B. 主語、謂語、賓語", "C. 名詞、動詞、形容詞", "D. 句子、段落、文章"],
        correctAnswer: 0
      },
      {
        id: 12,
        subject: "文言文",
        question: "「之乎者也」在文言文中的作用是什麼？",
        options: ["A. 表示名詞", "B. 表示動詞", "C. 虛詞，幫助表達", "D. 表示形容詞"],
        correctAnswer: 2
      },
      {
        id: 13,
        subject: "英文",
        question: "\"Unless you _____ harder, you won't succeed.\"",
        options: ["A. work", "B. worked", "C. will work", "D. would work"],
        correctAnswer: 0
      },
      {
        id: 14,
        subject: "數學",
        question: "一個三角形的三邊分別是 3 厘米、4 厘米和 5 厘米，它的周界是多少？",
        options: ["A. 10 厘米", "B. 11 厘米", "C. 12 厘米", "D. 13 厘米"],
        correctAnswer: 2
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"The mean of five numbers is 12. If four numbers are 8, 10, 15, 13, find the fifth.\"",
        options: ["A. 10", "B. 12", "C. 14", "D. 16"],
        correctAnswer: 2
      }
    ]
  },
  {
    grade: "s1",
    gradeLabel: "中一",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個成語形容「做事不認真，敷衍了事」？",
        options: ["A. 一絲不苟", "B. 馬馬虎虎", "C. 精益求精", "D. 廢寢忘食"],
        correctAnswer: 1
      },
      {
        id: 2,
        subject: "中文",
        question: "「君子坦蕩蕩，小人長戚戚。」這句話出自哪部經典？",
        options: ["A. 《論語》", "B. 《孟子》", "C. 《大學》", "D. 《中庸》"],
        correctAnswer: 0
      },
      {
        id: 3,
        subject: "中文",
        question: "作者認為人生中的悲歡離合是怎樣的？",
        options: ["A. 可以避免的", "B. 令人愉快的", "C. 自古以來難以兩全的", "D. 毫無意義的"],
        correctAnswer: 2
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「古文」和「現代文」的主要區別是什麼？",
        options: ["A. 字數不同", "B. 詞彙和語法不同", "C. 只有字體不同", "D. 沒有區別"],
        correctAnswer: 1
      },
      {
        id: 5,
        subject: "文言文",
        question: "「文言虛詞」的作用是什麼？",
        options: ["A. 表示名詞", "B. 幫助表達，無實際意義", "C. 表示動詞", "D. 表示形容詞"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "Choose the correct passive voice sentence:",
        options: ["A. The dog chased the cat.", "B. The cat was chased by the dog.", "C. The cat chased the dog.", "D. The dog was chased the cat."],
        correctAnswer: 1
      },
      {
        id: 7,
        subject: "英文",
        question: "\"Neither John _____ Mary was at home.\"",
        options: ["A. or", "B. nor", "C. and", "D. but"],
        correctAnswer: 1
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "Simplify: 3x + 5y − x + 2y",
        options: ["A. 2x + 7y", "B. 4x + 7y", "C. 2x + 3y", "D. 4x + 3y"],
        correctAnswer: 0
      },
      {
        id: 9,
        subject: "數學",
        question: "If a = 3 and b = −2, find the value of 2a − 3b.",
        options: ["A. 0", "B. 12", "C. -12", "D. 6"],
        correctAnswer: 1
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"Solve: 2(x + 3) = 10. What is x?\"",
        options: ["A. x = 2", "B. x = 3", "C. x = 4", "D. x = 5"],
        correctAnswer: 0
      },
      {
        id: 11,
        subject: "中文",
        question: "「對偶」修辭手法的特點是什麼？",
        options: ["A. 重複句式", "B. 句式相似，內容相對", "C. 誇大事實", "D. 擬人化"],
        correctAnswer: 1
      },
      {
        id: 12,
        subject: "文言文",
        question: "「乎」和「哉」在文言文中的區別是什麼？",
        options: ["A. 沒有區別", "B. 都表示肯定", "C. 都表示疑問或感嘆", "D. 一個表示疑問，一個表示感嘆"],
        correctAnswer: 3
      },
      {
        id: 13,
        subject: "英文",
        question: "\"She suggested _____ to the cinema.\"",
        options: ["A. go", "B. to go", "C. going", "D. went"],
        correctAnswer: 2
      },
      {
        id: 14,
        subject: "數學",
        question: "Expand: (x + 2)(x − 3)",
        options: ["A. x² − x − 6", "B. x² + x − 6", "C. x² − 5x − 6", "D. x² + 5x − 6"],
        correctAnswer: 0
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"Factorize: 4x² − 9y². What is the answer?\"",
        options: ["A. (2x − 3y)(2x − 3y)", "B. (4x − 9y)(x + y)", "C. (2x − 3y)(2x + 3y)", "D. (4x + 9y)(x − y)"],
        correctAnswer: 2
      }
    ]
  },
  {
    grade: "s2",
    gradeLabel: "中二",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個成語形容「做事不認真，敷衍了事」？",
        options: ["A. 一絲不苟", "B. 馬馬虎虎", "C. 精益求精", "D. 廢寢忘食"],
        correctAnswer: 1
      },
      {
        id: 2,
        subject: "中文",
        question: "「君子坦蕩蕩，小人長戚戚。」這句話出自哪部經典？",
        options: ["A. 《論語》", "B. 《孟子》", "C. 《大學》", "D. 《中庸》"],
        correctAnswer: 0
      },
      {
        id: 3,
        subject: "中文",
        question: "作者認為人生中的悲歡離合是怎樣的？",
        options: ["A. 可以避免的", "B. 令人愉快的", "C. 自古以來難以兩全的", "D. 毫無意義的"],
        correctAnswer: 2
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「古文」中「之」的用法有幾種？",
        options: ["A. 一種", "B. 兩種", "C. 三種", "D. 四種或以上"],
        correctAnswer: 3
      },
      {
        id: 5,
        subject: "文言文",
        question: "「文言文」中的「倒裝句」是什麼？",
        options: ["A. 正常的句序", "B. 改變正常句序的句子", "C. 很短的句子", "D. 很長的句子"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "Choose the correct passive voice sentence:",
        options: ["A. The dog chased the cat.", "B. The cat was chased by the dog.", "C. The cat chased the dog.", "D. The dog was chased the cat."],
        correctAnswer: 1
      },
      {
        id: 7,
        subject: "英文",
        question: "\"Neither John _____ Mary was at home.\"",
        options: ["A. or", "B. nor", "C. and", "D. but"],
        correctAnswer: 1
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "Expand: (x + 2)(x − 3)",
        options: ["A. x² − x − 6", "B. x² + x − 6", "C. x² − 5x − 6", "D. x² + 5x − 6"],
        correctAnswer: 0
      },
      {
        id: 9,
        subject: "數學",
        question: "Factorize: 4x² − 9y²",
        options: ["A. (2x − 3y)(2x − 3y)", "B. (4x − 9y)(x + y)", "C. (2x − 3y)(2x + 3y)", "D. (4x + 9y)(x − y)"],
        correctAnswer: 2
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"Find the value of x in the right-angled triangle with hypotenuse 13 and one leg 5.\"",
        options: ["A. 8", "B. 10", "C. 12", "D. 14"],
        correctAnswer: 2
      },
      {
        id: 11,
        subject: "中文",
        question: "「排比」和「對偶」的區別是什麼？",
        options: ["A. 沒有區別", "B. 排比強調重複，對偶強調相對", "C. 排比只有兩句", "D. 對偶只有一句"],
        correctAnswer: 1
      },
      {
        id: 12,
        subject: "文言文",
        question: "「文言文」中的「判斷句」如何表示？",
        options: ["A. 用「是」", "B. 用「為」或「是」", "C. 用「有」", "D. 用「無」"],
        correctAnswer: 1
      },
      {
        id: 13,
        subject: "英文",
        question: "\"She suggested _____ to the cinema.\"",
        options: ["A. go", "B. to go", "C. going", "D. went"],
        correctAnswer: 2
      },
      {
        id: 14,
        subject: "數學",
        question: "Find the value of x in the right-angled triangle with hypotenuse 13 and one leg 5.",
        options: ["A. 8", "B. 10", "C. 12", "D. 14"],
        correctAnswer: 2
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"The sum of two numbers is 20 and their difference is 4. Find the two numbers.\"",
        options: ["A. 10 and 10", "B. 12 and 8", "C. 14 and 6", "D. 16 and 4"],
        correctAnswer: 1
      }
    ]
  },
  {
    grade: "s3",
    gradeLabel: "中三",
    questions: [
      // Chinese
      {
        id: 1,
        subject: "中文",
        question: "哪一個句子運用了反問句？",
        options: ["A. 天氣這麼熱，你怎麼還穿這麼多衣服？", "B. 這本書真好看，你一定要讀讀看。", "C. 他不是一個好學生嗎？", "D. 我真希望明天是晴天。"],
        correctAnswer: 2
      },
      {
        id: 2,
        subject: "中文",
        question: "「不識廬山真面目，只緣身在此山中。」這兩句詩的寓意是什麼？",
        options: ["A. 說明廬山景色優美", "B. 勸告人們不要登山", "C. 比喻當局者迷，旁觀者清", "D. 讚美詩人觀察力敏銳"],
        correctAnswer: 2
      },
      {
        id: 3,
        subject: "中文",
        question: "這段文字主要表達了什麼？",
        options: ["A. 千里馬的稀有", "B. 伯樂的重要性", "C. 奴隸人對馬的殘害", "D. 馬的悲慘命運"],
        correctAnswer: 1
      },
      // Classical Chinese
      {
        id: 4,
        subject: "文言文",
        question: "「文言文」中的「省略句」是什麼？",
        options: ["A. 很短的句子", "B. 省略了某些成分的句子", "C. 很長的句子", "D. 沒有謂語的句子"],
        correctAnswer: 1
      },
      {
        id: 5,
        subject: "文言文",
        question: "「文言文」中的「被動句」如何表示？",
        options: ["A. 用「被」", "B. 用「被」或「為」", "C. 用「由」", "D. 用「從」"],
        correctAnswer: 1
      },
      // English
      {
        id: 6,
        subject: "英文",
        question: "Choose the sentence with a correct conditional clause (Type 3):",
        options: ["A. If I had studied harder, I would pass the exam.", "B. If I studied harder, I would have passed the exam.", "C. If I had studied harder, I would have passed the exam.", "D. If I have studied harder, I would have passed the exam."],
        correctAnswer: 2
      },
      {
        id: 7,
        subject: "英文",
        question: "\"He denied _____ the money.\"",
        options: ["A. steal", "B. to steal", "C. stealing", "D. stolen"],
        correctAnswer: 2
      },
      // Math
      {
        id: 8,
        subject: "數學",
        question: "Solve the simultaneous equations: x + y = 7, x − y = 3",
        options: ["A. x = 5, y = 2", "B. x = 2, y = 5", "C. x = 4, y = 3", "D. x = 3, y = 4"],
        correctAnswer: 0
      },
      {
        id: 9,
        subject: "數學",
        question: "Find the area of a circle with radius 10 cm. (Leave your answer in terms of π)",
        options: ["A. 10π cm²", "B. 20π cm²", "C. 100π cm²", "D. 200π cm²"],
        correctAnswer: 2
      },
      // English Math
      {
        id: 10,
        subject: "英文數學",
        question: "\"The mean of five numbers is 12. If four numbers are 8, 10, 15, 13, find the fifth.\"",
        options: ["A. 10", "B. 12", "C. 14", "D. 16"],
        correctAnswer: 2
      },
      {
        id: 11,
        subject: "中文",
        question: "「反問句」的作用是什麼？",
        options: ["A. 提出疑問", "B. 加強語氣，表達感情", "C. 陳述事實", "D. 發出命令"],
        correctAnswer: 1
      },
      {
        id: 12,
        subject: "文言文",
        question: "「文言文」中的「使役句」是什麼？",
        options: ["A. 表示命令的句子", "B. 表示讓某人做某事的句子", "C. 表示禁止的句子", "D. 表示祈求的句子"],
        correctAnswer: 1
      },
      {
        id: 13,
        subject: "英文",
        question: "\"The more you learn, _____ you know.\"",
        options: ["A. the more", "B. the most", "C. more", "D. most"],
        correctAnswer: 0
      },
      {
        id: 14,
        subject: "數學",
        question: "The mean of five numbers is 12. If four of the numbers are 8, 10, 15, 13, find the fifth number.",
        options: ["A. 10", "B. 12", "C. 14", "D. 16"],
        correctAnswer: 2
      },
      {
        id: 15,
        subject: "英文數學",
        question: "\"A bag contains 3 red balls and 2 blue balls. If a ball is drawn at random, what is the probability of drawing a red ball?\"",
        options: ["A. 1⁄2", "B. 3⁄5", "C. 2⁄5", "D. 1⁄3"],
        correctAnswer: 1
      }
    ]
  }
];
