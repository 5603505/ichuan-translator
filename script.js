// 四川话词汇对照表（可扩展）
const vocabulary = {
    "什么": "啥子",
    "吃饭": "吃莽莽",
    "哪里": "哪儿",
    "不知道": "晓不得",
    "很好": "巴适得很",
    "快点": "搞快滴",
    "聊天": "摆龙门阵",
    "睡觉": "困醒",
    "下雨": "落雨",
    "小孩": "娃儿"
};

// 核心翻译函数
function translate() {
    const inputText = document.getElementById('input').value;
    let outputText = inputText;
    
    // 按词长降序排列，优先替换长词
    const sortedWords = Object.keys(vocabulary).sort((a, b) => b.length - a.length);
    
    sortedWords.forEach(word => {
        const regex = new RegExp(word, 'g');
        outputText = outputText.replace(regex, vocabulary[word]);
    });
    
    document.getElementById('output').innerText = outputText;
}

// 页面加载时初始化
window.addEventListener('load', () => {
    document.getElementById('input').value = "今天吃什么？不知道哪里有好吃的";
    translate();
});