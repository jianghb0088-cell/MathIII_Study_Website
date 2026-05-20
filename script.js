/* Math IIIA / Math IIIB 学习网站脚本
   保存日期：2026-05-20
   最后更新时间：2026-05-20
*/
const courses = {
      iiia: [
        {
          title: "Polynomial Functions 多项式函数",
          keywords: ["polynomial", "degree", "zeros", "factors", "end behavior"],
          explanation: "Polynomial Functions 用加、减、乘和非负整数次幂组成。学习重点是根据 degree、leading coefficient、zeros 和 multiplicity 判断图像形状、x-intercepts 与 end behavior。",
          example: "例题：若 f(x)=x^3-4x=x(x-2)(x+2)，求 zeros 并描述 end behavior。",
          exampleAnswer: "zeros 为 x=-2, 0, 2。因为是三次且 leading coefficient 为正，所以 x→-∞ 时 f(x)→-∞，x→∞ 时 f(x)→∞。",
          exercises: [
            { q: "将 x^2-5x+6 因式分解，并写出 zeros。", a: "(x-2)(x-3)，zeros 为 2 和 3。" },
            { q: "判断 f(x)=-2x^4+3x^2-1 的 end behavior。", a: "四次且 leading coefficient 为负，两端都向下：x→±∞ 时 f(x)→-∞。" }
          ]
        },
        {
          title: "Rational Functions 有理函数",
          keywords: ["rational", "asymptote", "domain", "hole", "vertical asymptote"],
          explanation: "Rational Functions 是两个 polynomial 的比值。学习重点是 domain restrictions、vertical/horizontal asymptotes、holes，以及图像在渐近线附近的行为。",
          example: "例题：求 f(x)=1/(x-3) 的 domain 和 vertical asymptote。",
          exampleAnswer: "domain 是 x≠3；vertical asymptote 是 x=3。",
          exercises: [
            { q: "求 f(x)=(x+2)/(x-5) 的 domain。", a: "分母不能为 0，所以 domain 是 x≠5。" },
            { q: "f(x)=2/(x+1)+4 的 horizontal asymptote 是什么？", a: "horizontal asymptote 是 y=4。" }
          ]
        },
        {
          title: "Radical Functions 根式函数",
          keywords: ["radical", "square root", "domain", "extraneous solution", "radicand"],
          explanation: "Radical Functions 常见形式是 square root function。要特别关注 radicand 的限制、图像起点、transformations，以及解方程后检查 extraneous solutions。",
          example: "例题：求 f(x)=√(x-4)+2 的 domain 和起点。",
          exampleAnswer: "x-4≥0，所以 domain 是 x≥4。起点是 (4, 2)。",
          exercises: [
            { q: "求 f(x)=√(2x+6) 的 domain。", a: "2x+6≥0，所以 x≥-3。" },
            { q: "解 √x=5。", a: "x=25，检查 √25=5 成立。" }
          ]
        },
        {
          title: "Exponential Functions 指数函数",
          keywords: ["exponential", "growth", "decay", "initial value", "base"],
          explanation: "Exponential Functions 的变量在 exponent 位置，常用于增长、衰减、利息、人口和放射性模型。关键是区分 initial value、base、growth factor 和 decay factor。",
          example: "例题：一个数量从 80 开始，每小时增长 25%，写出模型。",
          exampleAnswer: "模型为 y=80(1.25)^t，其中 t 是小时数。",
          exercises: [
            { q: "y=500(0.9)^t 表示 growth 还是 decay？每期变化多少？", a: "decay，每期减少 10%。" },
            { q: "若 y=3·2^x，求 x=4 时 y 的值。", a: "y=3·16=48。" }
          ]
        },
        {
          title: "Logarithmic Functions 对数函数",
          keywords: ["logarithm", "inverse", "argument", "base", "change of base"],
          explanation: "Logarithmic Functions 是 Exponential Functions 的 inverse。学习重点包括 exponential/log form 转换、log properties、domain，以及用 log 解指数方程。",
          example: "例题：把 log₂(32)=5 改写成 exponential form。",
          exampleAnswer: "2^5=32。",
          exercises: [
            { q: "解 log₃(x)=4。", a: "x=3^4=81。" },
            { q: "log₅(25)+log₅(5) 等于多少？", a: "2+1=3；也可合并为 log₅(125)=3。" }
          ]
        },
        {
          title: "Function Transformations 函数变换",
          keywords: ["transformation", "parent function", "shift", "stretch", "reflection"],
          explanation: "Function Transformations 研究 parent function 如何平移、拉伸、压缩和反射。常见表达是 y=a·f(b(x-h))+k，要能把参数和图像变化对应起来。",
          example: "例题：g(x)=2(x-3)^2+1 相比 y=x² 有哪些变换？",
          exampleAnswer: "向右 3，vertical stretch by factor 2，向上 1。",
          exercises: [
            { q: "h(x)=-(x+4)^2 的图像如何从 y=x² 得到？", a: "向左 4，并关于 x-axis 反射。" },
            { q: "f(x)=√(x)-5 的图像如何变化？", a: "从 y=√x 向下 5。" }
          ]
        },
        {
          title: "Inverse Functions 反函数",
          keywords: ["inverse function", "one-to-one", "domain", "range", "horizontal line test"],
          explanation: "Inverse Functions 会交换输入和输出，也会交换 domain 与 range。要会用 horizontal line test 判断是否 one-to-one，并能通过交换 x、y 解出 inverse。",
          example: "例题：求 f(x)=2x-7 的 inverse。",
          exampleAnswer: "设 y=2x-7，交换得 x=2y-7，解得 y=(x+7)/2，所以 f⁻¹(x)=(x+7)/2。",
          exercises: [
            { q: "若 f(x)=x+9，求 f⁻¹(x)。", a: "f⁻¹(x)=x-9。" },
            { q: "为什么 y=x² 在所有 real numbers 上没有 inverse function？", a: "它不通过 horizontal line test；例如 y=4 对应 x=2 和 x=-2。" }
          ]
        }
      ],
      iiib: [
        {
          title: "Unit Circle 单位圆",
          keywords: ["unit circle", "cosine", "sine", "quadrant", "special angles"],
          explanation: "Unit Circle 是半径为 1、圆心在原点的圆。角 θ 对应点坐标 (cos θ, sin θ)，它把三角函数和坐标几何连接起来。",
          example: "例题：在 unit circle 上，θ=π/3 时点坐标是什么？",
          exampleAnswer: "(cos π/3, sin π/3)=(1/2, √3/2)。",
          exercises: [
            { q: "θ=π/2 时，sin θ 和 cos θ 分别是多少？", a: "sin θ=1，cos θ=0。" },
            { q: "角 7π/6 在第几象限？sin 是正还是负？", a: "第三象限，sin 为负。" }
          ]
        },
        {
          title: "Radian Measure 弧度制",
          keywords: ["radian", "degree", "arc length", "conversion", "π radians"],
          explanation: "Radian Measure 用半径长度来定义角度。180°=π radians，是 trigonometry 和 calculus 中最常用的角度单位。",
          example: "例题：把 150° 转成 radians。",
          exampleAnswer: "150°×π/180°=5π/6。",
          exercises: [
            { q: "把 45° 转成 radians。", a: "π/4。" },
            { q: "把 3π/2 转成 degrees。", a: "270°。" }
          ]
        },
        {
          title: "Trigonometric Functions 三角函数",
          keywords: ["sine", "cosine", "tangent", "SOHCAHTOA", "reciprocal"],
          explanation: "Trigonometric Functions 包括 sine、cosine、tangent 等。它们既可来自 right triangle ratios，也可来自 unit circle coordinates。",
          example: "例题：直角三角形中，某角 opposite=6，hypotenuse=10，求 sin θ。",
          exampleAnswer: "sin θ=opposite/hypotenuse=6/10=3/5。",
          exercises: [
            { q: "若 adjacent=8，hypotenuse=17，求 cos θ。", a: "cos θ=8/17。" },
            { q: "若 sin θ=5/13，且 θ 在第一象限，求 cos θ。", a: "cos θ=12/13。" }
          ]
        },
        {
          title: "Graphing Sine / Cosine Functions 正弦余弦图像",
          keywords: ["sine graph", "cosine graph", "amplitude", "period", "midline"],
          explanation: "Graphing Sine / Cosine Functions 要抓住 amplitude、period、phase shift 和 midline。周期图像适合描述温度、潮汐、声波等重复变化。",
          example: "例题：y=3sin(2x)+1 的 amplitude、period、midline 是什么？",
          exampleAnswer: "amplitude=3；period=2π/2=π；midline 是 y=1。",
          exercises: [
            { q: "y=4cos(x)-2 的 amplitude 和 midline 是什么？", a: "amplitude=4；midline 是 y=-2。" },
            { q: "y=sin(x-π/4) 的 phase shift 是什么？", a: "向右 π/4。" }
          ]
        },
        {
          title: "Trigonometric Equations 三角方程基础",
          keywords: ["trigonometric equation", "reference angle", "solutions", "interval", "identity"],
          explanation: "Trigonometric Equations 的基础是利用 unit circle、reference angle 和函数周期找解。题目通常会给定区间，例如 0≤x<2π。",
          example: "例题：在 0≤x<2π 内解 sin x=1/2。",
          exampleAnswer: "sin 为 1/2 的角在第一、第二象限：x=π/6, 5π/6。",
          exercises: [
            { q: "在 0≤x<2π 内解 cos x=0。", a: "x=π/2, 3π/2。" },
            { q: "在 0≤x<2π 内解 sin x=-1。", a: "x=3π/2。" }
          ]
        },
        {
          title: "Statistics and Normal Distribution 统计与正态分布",
          keywords: ["statistics", "normal distribution", "mean", "standard deviation", "z-score"],
          explanation: "Statistics 关注数据的收集、描述和解释。Normal Distribution 是钟形曲线，常用 mean、standard deviation 和 z-score 描述数据位置。",
          example: "例题：若 μ=70，σ=8，x=86，求 z-score。",
          exampleAnswer: "z=(86-70)/8=2，表示高于平均数 2 个 standard deviations。",
          exercises: [
            { q: "若 μ=100，σ=15，x=85，求 z-score。", a: "z=(85-100)/15=-1。" },
            { q: "在 normal distribution 中，约多少数据落在 μ±1σ 内？", a: "约 68%。" }
          ]
        },
        {
          title: "Simulation and Inference 模拟与推断入门",
          keywords: ["simulation", "inference", "sample", "population", "randomization"],
          explanation: "Simulation 用随机过程模拟现实情境，Inference 用 sample 信息推断 population。入门阶段重点是理解抽样、随机性、偏差和结论语言。",
          example: "例题：想估计学校支持新午餐菜单的比例，为什么要 random sample？",
          exampleAnswer: "random sample 能减少 selection bias，让 sample 更可能代表整个 population。",
          exercises: [
            { q: "只问午餐排队最前面的 20 人是否喜欢菜单，有什么问题？", a: "可能有 bias，因为这些学生不一定代表全校学生。" },
            { q: "simulation 中每次随机试验的结果为什么可能不同？", a: "因为随机性 variation；多次重复能观察长期趋势。" }
          ]
        }
      ]
    };

    const allExercises = [];

    function makeId(text) {
      return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    function renderTopic(topic, courseName, index) {
      const id = `${courseName}-${index}-${makeId(topic.keywords[0])}`;
      topic.exercises.forEach((item, exerciseIndex) => {
        allExercises.push({
          course: courseName === "iiia" ? "Math IIIA" : "Math IIIB",
          topic: topic.title,
          q: item.q,
          a: item.a
        });
      });

      const exerciseHtml = topic.exercises
        .map((item) => `<li>${item.q}</li>`)
        .join("");

      const answerHtml = [
        `<strong>例题答案：</strong>${topic.exampleAnswer}`,
        ...topic.exercises.map((item, i) => `<strong>练习 ${i + 1}：</strong>${item.a}`)
      ].join("<br>");

      return `
        <article class="topic-card" data-search="${[
          topic.title,
          topic.keywords.join(" "),
          topic.explanation,
          topic.example,
          topic.exercises.map((item) => item.q).join(" ")
        ].join(" ").toLowerCase()}">
          <div class="topic-head">
            <h3>${topic.title}</h3>
            <div class="tag-row">${topic.keywords.map((word) => `<span class="tag">${word}</span>`).join("")}</div>
          </div>
          <div class="topic-body">
            <p>${topic.explanation}</p>
            <p class="mini-label">Example</p>
            <p class="example">${topic.example}</p>
            <p class="mini-label">Practice</p>
            <ol class="exercise-list">${exerciseHtml}</ol>
            <div class="action-row">
              <button class="btn ghost answer-toggle" type="button" aria-expanded="false" aria-controls="${id}">显示答案</button>
            </div>
            <div class="answer" id="${id}">${answerHtml}</div>
          </div>
        </article>
      `;
    }

    document.getElementById("iiiaTopics").innerHTML = courses.iiia
      .map((topic, index) => renderTopic(topic, "iiia", index))
      .join("");

    document.getElementById("iiibTopics").innerHTML = courses.iiib
      .map((topic, index) => renderTopic(topic, "iiib", index))
      .join("");

    document.addEventListener("click", (event) => {
      const button = event.target.closest(".answer-toggle");
      if (!button) return;
      const answer = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = answer.classList.toggle("show");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "隐藏答案" : "显示答案";
    });

    const searchInput = document.getElementById("searchInput");
    const noResults = document.getElementById("noResults");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;
      document.querySelectorAll(".topic-card").forEach((card) => {
        const match = !query || card.dataset.search.includes(query);
        card.style.display = match ? "" : "none";
        if (match) visibleCount += 1;
      });
      noResults.classList.toggle("show", visibleCount === 0);
    });

    const todayQuestion = document.getElementById("todayQuestion");
    const todayAnswer = document.getElementById("todayAnswer");
    const todayAnswerBtn = document.getElementById("todayAnswerBtn");

    document.getElementById("randomBtn").addEventListener("click", () => {
      const item = allExercises[Math.floor(Math.random() * allExercises.length)];
      todayQuestion.innerHTML = `<strong>${item.course} · ${item.topic}</strong><br>${item.q}`;
      todayAnswer.textContent = item.a;
      todayAnswer.classList.remove("show");
      todayAnswerBtn.hidden = false;
      todayAnswerBtn.textContent = "显示答案";
    });

    todayAnswerBtn.addEventListener("click", () => {
      const isOpen = todayAnswer.classList.toggle("show");
      todayAnswerBtn.textContent = isOpen ? "隐藏答案" : "显示答案";
    });

    const STORAGE_KEY = "math3_exam_platform_v1";
    let currentTestIndex = 0;
    let timerId = null;
    let secondsLeft = 45 * 60;

    function optionSet(correct, wrongs) {
      return [correct, ...wrongs].map(String);
    }

    function mc(id, topic, question, choices, correctIndex, explanation, keywords) {
      return { id, type: "mc", topic, question, choices, correctIndex, answer: choices[correctIndex], explanation, keywords };
    }

    function openQ(id, topic, question, answer, explanation, keywords) {
      return { id, type: "open", topic, question, answer, explanation, keywords };
    }

    function buildExam(testNo) {
      const d = testNo;
      const a = d + 2;
      const b = d + 4;
      const rootSum = a + b;
      const product = a * b;
      const base = d % 3 + 2;
      const exponent = d % 4 + 2;
      const shift = d + 1;
      const stretch = d % 4 + 2;
      const mean = 70 + d;
      const sd = d % 5 + 5;
      const xVal = mean + 2 * sd;
      const growthRate = 5 + d;
      const successProb = (20 + d * 5) / 100;
      const failProb = (1 - successProb).toFixed(2);
      const partA = [
        mc(`t${d}-a1`, "polynomial", `将 <span class="math">x²-${rootSum}x+${product}</span> 因式分解，zeros 是多少？`, optionSet(`x=${a}, ${b}`, [`x=-${a}, -${b}`, `x=${rootSum}, ${product}`, `x=${a}, -${b}`]), 0, [`寻找两个数：乘积为 ${product}，和为 ${rootSum}。`, `这两个数是 ${a} 和 ${b}，所以因式为 <span class="math">(x-${a})(x-${b})</span>。`, `令每个 factor 等于 0，得到 zeros。`], ["polynomial", "zeros", "factors"]),
        mc(`t${d}-a2`, "polynomial", `判断 <span class="math">f(x)=${d % 2 ? "-" : ""}${stretch}x^${d < 5 ? 3 : 4}+1</span> 的 end behavior。`, d % 2 ? optionSet("左上右下", ["左下右上", "两端向上", "两端向下"]) : optionSet(d < 5 ? "左下右上" : "两端向上", ["左上右下", "两端向下", "无法判断"]), 0, [`先看 degree 是 ${d < 5 ? "odd" : "even"}。`, `再看 leading coefficient 是 ${d % 2 ? "negative" : "positive"}。`, `结合 degree 与 leading coefficient 判断左右端行为。`], ["end behavior", "degree", "leading coefficient"]),
        mc(`t${d}-a3`, "rational functions", `函数 <span class="math">f(x)=(${d}x+2)/(x-${shift})</span> 的 domain restriction 是什么？`, optionSet(`x≠${shift}`, [`x≠-${shift}`, `x>${shift}`, "all real numbers"]), 0, [`Rational function 的分母不能为 0。`, `令 <span class="math">x-${shift}=0</span>，得到 x=${shift}。`, `所以 domain 排除 x=${shift}。`], ["rational", "domain", "restriction"]),
        mc(`t${d}-a4`, "rational functions", `<span class="math">g(x)=${stretch}/(x+${a})-${d}</span> 的 vertical asymptote 是？`, optionSet(`x=-${a}`, [`x=${a}`, `y=-${d}`, `y=${stretch}`]), 0, [`vertical asymptote 来自分母为 0。`, `x+${a}=0，所以 x=-${a}。`, `外面的 -${d} 只影响 horizontal shift，不改变 vertical asymptote。`], ["vertical asymptote", "rational"]),
        mc(`t${d}-a5`, "radicals", `求 <span class="math">h(x)=√(${stretch}x+${2 * d})</span> 的 domain。`, optionSet(`x≥-${d}/${stretch}`, [`x≤-${d}/${stretch}`, `x≥${d}/${stretch}`, "all real numbers"]), 0, [`square root 的 radicand 必须大于等于 0。`, `解 <span class="math">${stretch}x+${2 * d}≥0</span>。`, `得到 <span class="math">x≥-${d}/${stretch}</span>。`], ["radical", "domain", "radicand"]),
        mc(`t${d}-a6`, "exponential", `一个数量从 ${100 + 10 * d} 开始，每期增长 ${growthRate}%。模型是？`, optionSet(`y=${100 + 10 * d}(1.${String(growthRate).padStart(2, "0")})^t`, [`y=${100 + 10 * d}(${growthRate})^t`, `y=${growthRate}(1.${String(100 + 10 * d).padStart(2, "0")})^t`, `y=${100 + 10 * d}(0.${String(growthRate).padStart(2, "0")})^t`]), 0, [`initial value 是 ${100 + 10 * d}。`, `增长 ${growthRate}% 表示 growth factor 是 <span class="math">1+${growthRate}/100</span>。`, `所以模型为 exponential growth。`], ["exponential", "growth", "initial value"]),
        mc(`t${d}-a7`, "logarithm", `解 <span class="math">log_${base}(x)=${exponent}</span>。`, optionSet(String(base ** exponent), [String(base * exponent), String(base + exponent), String(exponent ** base)]), 0, [`把 logarithmic form 改写为 exponential form。`, `<span class="math">log_${base}(x)=${exponent}</span> 等价于 <span class="math">${base}^${exponent}=x</span>。`, `因此 x=${base ** exponent}。`], ["logarithm", "exponential form", "base"]),
        mc(`t${d}-a8`, "transformations", `<span class="math">y=${stretch}(x-${shift})²-${a}</span> 相比 <span class="math">y=x²</span> 的变化是？`, optionSet(`右移 ${shift}，纵向拉伸 ${stretch} 倍，下移 ${a}`, [`左移 ${shift}，纵向拉伸 ${stretch} 倍，上移 ${a}`, `右移 ${a}，下移 ${shift}`, `只向上移动 ${a}`]), 0, [`标准形式是 <span class="math">a(x-h)²+k</span>。`, `h=${shift} 表示 right shift。`, `前面的 ${stretch} 是 vertical stretch，k=-${a} 表示 down shift。`], ["transformation", "shift", "stretch"]),
        mc(`t${d}-a9`, "inverse functions", `若 <span class="math">f(x)=${stretch}x-${a}</span>，求 <span class="math">f⁻¹(x)</span>。`, optionSet(`(x+${a})/${stretch}`, [`(x-${a})/${stretch}`, `${stretch}x+${a}`, `(x+${stretch})/${a}`]), 0, [`设 y=${stretch}x-${a}。`, `交换 x 和 y：<span class="math">x=${stretch}y-${a}</span>。`, `解 y，得到 <span class="math">y=(x+${a})/${stretch}</span>。`], ["inverse function", "linear function"]),
        mc(`t${d}-a10`, "logarithm", `化简 <span class="math">log₂(8)+log₂(${2 ** d})</span>。`, optionSet(String(3 + d), [String(3 * d), String(8 + 2 ** d), String(d - 3)]), 0, [`<span class="math">log₂(8)=3</span>。`, `<span class="math">log₂(${2 ** d})=${d}</span>。`, `相加得到 ${3 + d}。`], ["log properties", "logarithm"])
      ];

      const angleA = d % 2 ? "π/6" : "π/3";
      const angleAns = d % 2 ? "1/2" : "√3/2";
      const degrees = 30 * (d + 2);
      const rad = `${d + 2}π/6`;
      const amp = d % 4 + 2;
      const periodDiv = d % 3 + 1;
      const partB = [
        openQ(`t${d}-b1`, "unit circle", `在 unit circle 上，求 <span class="math">sin(${angleA})</span>。`, angleAns, [`unit circle 上点坐标是 <span class="math">(cos θ, sin θ)</span>。`, `特殊角 ${angleA} 的 y-coordinate 就是 sine。`, `因此答案是 ${angleAns}。`], ["unit circle", "sine", "special angle"]),
        openQ(`t${d}-b2`, "radian measure", `把 <span class="math">${degrees}°</span> 转成 radians。`, rad, [`使用 <span class="math">degrees × π/180</span>。`, `<span class="math">${degrees}×π/180=${rad}</span>。`, `可按老师要求继续约分。`], ["radian", "degree conversion"]),
        openQ(`t${d}-b3`, "trigonometric functions", `直角三角形中 opposite=${3 + d}，hypotenuse=${5 + d}，写出 <span class="math">sin θ</span>。`, `${3 + d}/${5 + d}`, [`SOHCAHTOA：sine = opposite / hypotenuse。`, `代入 opposite=${3 + d}，hypotenuse=${5 + d}。`, `得到 <span class="math">sin θ=${3 + d}/${5 + d}</span>。`], ["sine", "SOHCAHTOA"]),
        openQ(`t${d}-b4`, "sine/cosine graphs", `函数 <span class="math">y=${amp}sin(${periodDiv}x)+${d}</span> 的 amplitude、period、midline 是什么？`, `amplitude=${amp}, period=${periodDiv === 1 ? "2π" : `2π/${periodDiv}`}, midline y=${d}`, [`amplitude 是 |A|，所以为 ${amp}。`, `period 是 <span class="math">2π/|B|</span>，B=${periodDiv}。`, `midline 是 <span class="math">y=${d}</span>。`], ["amplitude", "period", "midline"]),
        openQ(`t${d}-b5`, "trig equations", `在 <span class="math">0≤x<2π</span> 内解 <span class="math">cos x=0</span>。`, "x=π/2, 3π/2", [`unit circle 上 cosine 是 x-coordinate。`, `x-coordinate 为 0 的点在上方和下方。`, `所以解是 <span class="math">π/2</span> 和 <span class="math">3π/2</span>。`], ["trigonometric equation", "unit circle"]),
        openQ(`t${d}-b6`, "unit circle", `角 <span class="math">${d + 4}π/6</span> 在哪个象限？sine 的正负号是什么？`, d + 4 < 7 ? "第二象限，sine 为正" : "第三或第四象限，按角度化简后判断；sine 可能为负", [`先把角放到 <span class="math">0</span> 到 <span class="math">2π</span>。`, `再根据象限判断坐标正负。`, `sine 对应 y-coordinate。`], ["quadrant", "sine sign"])
      ];

      const partC = [
        openQ(`t${d}-c1`, "normal distribution", `若 <span class="math">μ=${mean}</span>，<span class="math">σ=${sd}</span>，<span class="math">x=${xVal}</span>，求 z-score。`, "z=2", [`使用 <span class="math">z=(x-μ)/σ</span>。`, `代入得到 <span class="math">(${xVal}-${mean})/${sd}</span>。`, `结果为 z=2。`], ["normal distribution", "z-score"]),
        openQ(`t${d}-c2`, "probability", `如果一次随机抽取成功概率是 <span class="math">${successProb.toFixed(2)}</span>，失败概率是多少？`, failProb, [`complement rule：失败概率 = 1 - 成功概率。`, `用 <span class="math">1-${successProb.toFixed(2)}=${failProb}</span> 计算。`, `注意 probability 总和为 1。`], ["probability", "complement"]),
        openQ(`t${d}-c3`, "modeling", `手机套餐基础费 $${20 + d}，每 GB $${3 + d}。写出总费用模型。`, `C=${20 + d}+${3 + d}g`, [`确定 fixed cost 是 ${20 + d}。`, `每 GB 的 rate 是 ${3 + d}。`, `令 g 为 GB 数，linear model 为 <span class="math">C=${20 + d}+${3 + d}g</span>。`], ["modeling", "linear model"]),
        openQ(`t${d}-c4`, "real-life application", `某考试分数近似 normal distribution。若平均分为 ${mean}，standard deviation 为 ${sd}，约多少学生分数在 ${mean - sd} 到 ${mean + sd} 之间？`, "约 68%", [`区间 <span class="math">μ±1σ</span>。`, `根据 68-95-99.7 Rule。`, `约 68% 数据落在一个 standard deviation 内。`], ["normal distribution", "68-95-99.7 rule"])
      ];

      const partD = [
        openQ(`t${d}-d1`, "modeling", `开放题：一个社团筹款，启动资金 $${50 + 5 * d}，每周按 ${growthRate}% 增长。建立 exponential model，并估计第 4 周金额。`, `模型 y=${50 + 5 * d}(1.${String(growthRate).padStart(2, "0")})^t；第 4 周代入 t=4。`, [`第 1 步：识别 initial value。`, `第 2 步：把增长率转成 growth factor。`, `第 3 步：写 <span class="math">y=a·b^t</span> 并代入 t=4。`], ["exponential model", "growth factor"]),
        openQ(`t${d}-d2`, "trigonometry and statistics", `开放题：海边一天水位可用 <span class="math">h(t)=${amp}cos(πt/6)+${d + 5}</span> 表示。解释 amplitude、midline、period，并说明如何用数据检查模型是否合理。`, `amplitude=${amp}，midline y=${d + 5}，period=12 小时；用实际水位数据比较 residuals。`, [`第 1 步：从 cosine model 读出 amplitude 和 vertical shift。`, `第 2 步：period=<span class="math">2π/(π/6)=12</span>。`, `第 3 步：用 observed data 与 predicted values 比较，观察 residuals 是否随机且较小。`], ["cosine model", "period", "residuals"])
      ];

      return { testNo: d, title: `Test ${d}`, difficulty: d < 4 ? "基础巩固" : d < 8 ? "综合提高" : "考前挑战", minutes: 45, partA, partB, partC, partD };
    }

    const exams = Array.from({ length: 10 }, (_, index) => buildExam(index + 1));

    function loadExamState() {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [], wrongbook: [] };
      } catch {
        return { attempts: [], wrongbook: [] };
      }
    }

    function saveExamState(state) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function getAllExamQuestions() {
      return exams.flatMap((exam) => [...exam.partA, ...exam.partB, ...exam.partC, ...exam.partD].map((q) => ({ ...q, testTitle: exam.title })));
    }

    function renderExamTabs() {
      document.getElementById("examTabs").innerHTML = exams.map((exam, index) => `
        <button class="btn ${index === currentTestIndex ? "active" : ""}" type="button" data-test-index="${index}">${exam.title}</button>
      `).join("");
    }

    function renderQuestion(q, number) {
      const explainId = `${q.id}-explain`;
      const choices = q.type === "mc" ? `
        <ul class="choice-list">
          ${q.choices.map((choice, index) => `
            <li><label><input type="radio" name="${q.id}" value="${index}"> <span>${String.fromCharCode(65 + index)}. ${choice}</span></label></li>
          `).join("")}
        </ul>
      ` : `<textarea class="work-input" aria-label="作答区" placeholder="在这里写步骤；提交后可查看解析自评。"></textarea>`;
      return `
        <article class="question-card" data-question-id="${q.id}" data-topic="${q.topic}">
          <div class="question-head"><span>Question ${number}</span><span>${q.topic}</span></div>
          <p class="question-text">${q.question}</p>
          ${choices}
          <div class="action-row">
            <button class="btn ghost exam-explain-toggle" type="button" aria-expanded="false" aria-controls="${explainId}">查看解析</button>
          </div>
          <div class="explanation" id="${explainId}">
            <p><strong>正确答案：</strong>${q.answer}</p>
            <p><strong>关键英文词汇：</strong>${q.keywords.join(", ")}</p>
            <ol>${q.explanation.map((step) => `<li>${step}</li>`).join("")}</ol>
          </div>
        </article>
      `;
    }

    function renderExam(index = currentTestIndex) {
      currentTestIndex = index;
      const exam = exams[index];
      document.getElementById("sideExamTitle").textContent = exam.title;
      document.getElementById("scoreBanner").classList.remove("show");
      document.getElementById("examStage").innerHTML = `
        <div class="exam-titlebar">
          <div>
            <h3>${exam.title} · ${exam.difficulty}</h3>
            <div class="exam-meta">45分钟 · Part A 自动评分 · Part B/C/D 解析自评</div>
          </div>
          <strong>${exam.partA.length + exam.partB.length + exam.partC.length + exam.partD.length} 题</strong>
        </div>
        <section class="exam-part"><h3>Part A 基础题 · 10题选择题</h3>${exam.partA.map((q, i) => renderQuestion(q, i + 1)).join("")}</section>
        <section class="exam-part"><h3>Part B 三角函数题 · 6题</h3>${exam.partB.map((q, i) => renderQuestion(q, i + 11)).join("")}</section>
        <section class="exam-part"><h3>Part C 统计与应用题 · 4题</h3>${exam.partC.map((q, i) => renderQuestion(q, i + 17)).join("")}</section>
        <section class="exam-part"><h3>Part D 综合挑战题 · 2题开放式应用题</h3>${exam.partD.map((q, i) => renderQuestion(q, i + 21)).join("")}</section>
      `;
      renderExamTabs();
      resetTimer();
    }

    function resetTimer() {
      clearInterval(timerId);
      secondsLeft = 45 * 60;
      updateTimerDisplay();
    }

    function updateTimerDisplay() {
      const minutes = Math.floor(secondsLeft / 60);
      const seconds = secondsLeft % 60;
      document.getElementById("examTimer").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function startTimer() {
      clearInterval(timerId);
      timerId = setInterval(() => {
        secondsLeft = Math.max(0, secondsLeft - 1);
        updateTimerDisplay();
        if (secondsLeft === 0) {
          clearInterval(timerId);
          document.getElementById("scoreBanner").textContent = "45分钟到。建议现在提交 Part A，并查看解析完成自评。";
          document.getElementById("scoreBanner").classList.add("show");
        }
      }, 1000);
    }

    function submitCurrentExam() {
      const exam = exams[currentTestIndex];
      let correct = 0;
      const wrongItems = [];
      exam.partA.forEach((q) => {
        const selected = document.querySelector(`input[name="${q.id}"]:checked`);
        const card = document.querySelector(`[data-question-id="${q.id}"]`);
        card.classList.remove("correct", "incorrect");
        if (selected && Number(selected.value) === q.correctIndex) {
          correct += 1;
          card.classList.add("correct");
        } else {
          card.classList.add("incorrect");
          wrongItems.push({
            id: q.id,
            testTitle: exam.title,
            topic: q.topic,
            question: q.question,
            selected: selected ? q.choices[Number(selected.value)] : "未作答",
            answer: q.answer,
            explanation: q.explanation,
            keywords: q.keywords
          });
        }
      });
      const state = loadExamState();
      const wrongMap = new Map(state.wrongbook.map((item) => [item.id, item]));
      wrongItems.forEach((item) => wrongMap.set(item.id, item));
      state.wrongbook = [...wrongMap.values()];
      state.attempts.push({
        testNo: exam.testNo,
        title: exam.title,
        date: new Date().toLocaleString("zh-CN"),
        correct,
        total: exam.partA.length,
        wrongTopics: wrongItems.map((item) => item.topic)
      });
      saveExamState(state);
      document.getElementById("scoreBanner").textContent = `${exam.title} Part A 自动评分：${correct}/${exam.partA.length}。Part B/C/D 请点击“查看解析”自评步骤。`;
      document.getElementById("scoreBanner").classList.add("show");
      updateDashboard();
    }

    function summarizeState() {
      const state = loadExamState();
      const total = state.attempts.reduce((sum, item) => sum + item.total, 0);
      const correct = state.attempts.reduce((sum, item) => sum + item.correct, 0);
      const topicCounts = {};
      state.attempts.forEach((item) => item.wrongTopics.forEach((topic) => {
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;
      }));
      const weakest = Object.entries(topicCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "-";
      return {
        state,
        accuracy: total ? Math.round((correct / total) * 100) : 0,
        completed: new Set(state.attempts.map((item) => item.testNo)).size,
        weakest,
        wrongCount: state.wrongbook.length
      };
    }

    function updateDashboard() {
      const summary = summarizeState();
      document.getElementById("metricAccuracy").textContent = `${summary.accuracy}%`;
      document.getElementById("metricCompleted").textContent = String(summary.completed);
      document.getElementById("metricWeakest").textContent = summary.weakest;
      document.getElementById("metricWrongbook").textContent = String(summary.wrongCount);
      document.getElementById("parentSummary").textContent = summary.state.attempts.length
        ? `最近一次：${summary.state.attempts.at(-1).title}，Part A ${summary.state.attempts.at(-1).correct}/${summary.state.attempts.at(-1).total}。累计正确率 ${summary.accuracy}%，目前最需要关注：${summary.weakest}。`
        : "还没有提交过试卷。完成 Part A 选择题后，这里会显示最近成绩、累计正确率和需要关注的知识点。";
      document.getElementById("statsSummary").textContent = `累计正确率 ${summary.accuracy}%，已完成 ${summary.completed} 套不同试卷，最弱知识点：${summary.weakest}。`;
      document.getElementById("recommendedPractice").textContent = summary.weakest === "-"
        ? "今日建议：先做 Test 1 的 Part A，建立基准分。"
        : `今日建议：优先复习 ${summary.weakest}，再完成一套相邻难度的 Part A。`;
      document.getElementById("scoreHistory").innerHTML = summary.state.attempts.length
        ? summary.state.attempts.slice().reverse().map((item) => `<div class="question-card"><strong>${item.title}</strong><br>${item.date}<br>Part A 得分：${item.correct}/${item.total}</div>`).join("")
        : `<div class="empty-note">暂无成绩记录。</div>`;
      renderWrongbook(summary.state.wrongbook);
    }

    function renderWrongbook(items) {
      document.getElementById("wrongbookList").innerHTML = items.length
        ? items.map((item) => `
          <article class="question-card">
            <div class="question-head"><span>${item.testTitle}</span><span>${item.topic}</span></div>
            <p class="question-text">${item.question}</p>
            <p><strong>你的答案：</strong>${item.selected}</p>
            <p><strong>正确答案：</strong>${item.answer}</p>
            <p><strong>关键词：</strong>${item.keywords.join(", ")}</p>
            <ol>${item.explanation.map((step) => `<li>${step}</li>`).join("")}</ol>
          </article>
        `).join("")
        : `<div class="empty-note">错题本还是空的。提交试卷后，做错的选择题会自动出现在这里。</div>`;
    }

    function renderRandomPracticeSet() {
      const pool = getAllExamQuestions();
      const picked = [];
      const used = new Set();
      while (picked.length < 8 && used.size < pool.length) {
        const item = pool[Math.floor(Math.random() * pool.length)];
        if (!used.has(item.id)) {
          used.add(item.id);
          picked.push(item);
        }
      }
      document.getElementById("randomPracticeSet").innerHTML = picked.map((q, index) => `
        <article class="question-card">
          <div class="question-head"><span>${q.testTitle} · 随机题 ${index + 1}</span><span>${q.topic}</span></div>
          <p class="question-text">${q.question}</p>
          <p><strong>答案：</strong>${q.answer}</p>
          <p><strong>关键词：</strong>${q.keywords.join(", ")}</p>
        </article>
      `).join("");
    }

    document.getElementById("examTabs").addEventListener("click", (event) => {
      const button = event.target.closest("[data-test-index]");
      if (!button) return;
      renderExam(Number(button.dataset.testIndex));
    });

    document.querySelector(".view-tabs").addEventListener("click", (event) => {
      const button = event.target.closest("[data-view-btn]");
      if (!button) return;
      document.querySelectorAll("[data-view-btn]").forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".study-view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.viewBtn).classList.add("active");
    });

    document.getElementById("examStage").addEventListener("click", (event) => {
      const button = event.target.closest(".exam-explain-toggle");
      if (!button) return;
      const panel = document.getElementById(button.getAttribute("aria-controls"));
      const isOpen = panel.classList.toggle("show");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "隐藏解析" : "查看解析";
    });

    document.getElementById("startExamBtn").addEventListener("click", startTimer);
    document.getElementById("submitExamBtn").addEventListener("click", submitCurrentExam);
    document.getElementById("printExamBtn").addEventListener("click", () => window.print());
    document.getElementById("clearWrongbookBtn").addEventListener("click", () => {
      const state = loadExamState();
      state.wrongbook = [];
      saveExamState(state);
      updateDashboard();
    });
    document.getElementById("clearStatsBtn").addEventListener("click", () => {
      saveExamState({ attempts: [], wrongbook: [] });
      updateDashboard();
    });
    document.getElementById("jumpRecommendedBtn").addEventListener("click", () => {
      document.querySelector('[data-view-btn="testsView"]').click();
      document.getElementById("examCenter").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    renderExam(0);
    renderRandomPracticeSet();
    updateDashboard();
