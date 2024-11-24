export const themes = {
  wabisabi: {
    name: '侘寂风',
    styles: `
      .markdown-body {
        color: #2d2a2a;
        line-height: 1.8;
        font-family: "Noto Serif JP", serif;
        background: #fafaf8;
        font-size: 16px;
        padding: 20px;
      }
      .markdown-h1, .markdown-h2, .markdown-h3,
      .markdown-h4, .markdown-h5, .markdown-h6 {
        color: #2d2a2a;
        font-weight: 400;
        margin: 2.5em 0 1em;
        letter-spacing: 0.05em;
      }
      .markdown-h1 {
        font-size: 2em;
        border-bottom: 1px solid #d3d3d3;
        padding-bottom: 0.5em;
      }
      .markdown-h2 {
        font-size: 1.6em;
        color: #4a4a4a;
      }
      .markdown-li {
        color: #4a4a4a;
        margin: 0.8em 0;
        padding-left: 0.5em;
      }
      .markdown-li .markdown-li {
        margin: 0.4em 0;
        padding-left: 0.3em;
      }
      blockquote {
        border-left: 2px solid #9e9e9e;
        margin: 2em 0;
        padding: 1em 2em;
        background: #f5f5f5;
        font-style: italic;
      }
      code {
        background: #f0f0f0;
        color: #666;
        padding: 0.2em 0.4em;
        border-radius: 2px;
        font-family: "Source Code Pro", monospace;
      }
      pre code {
        background: #2d2a2a;
        color: #d4d4d4;
        padding: 1.5em;
      }
      a {
        color: #696969;
        text-decoration: none;
        border-bottom: 1px solid #d3d3d3;
      }
      img {
        border-radius: 10px;
      }
      .markdown-body ol {
        color: #2d2a2a;
      }
      .markdown-ol {
        color: #2d2a2a;
      }
      .markdown-strong {
        color: #2d2a2a;
        font-weight: bold;
      }
      strong {
        color: #2d2a2a;
        font-weight: bold;
      }
      .markdown-body ul,
      .markdown-body ol {
        padding-left: 1em;
      }
      .markdown-body ul ul,
      .markdown-body ol ol,
      .markdown-body ul ol,
      .markdown-body ol ul {
        padding-left: 0.5em;
      }
      .markdown-li {
        margin: 0.4em 0;
        padding-left: 0.2em;
      }
    `
  },
  bauhaus: {
    name: '包豪斯',
    styles: `
      .markdown-body {
        color: #121212;
        line-height: 1.6;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: #ffffff;
        font-size: 16px;
        padding: 20px;
      }
      .markdown-h1, .markdown-h2, .markdown-h3,
      .markdown-h4, .markdown-h5, .markdown-h6 {
        color: #000;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
      .markdown-h1 {
        font-size: 2.4em;
        border-left: 15px solid #e31e24;
        padding-left: 1em;
        margin: 1.5em 0;
      }
      .markdown-h2 {
        font-size: 1.8em;
        border-bottom: 4px solid #1d71b8;
      }
      .markdown-li {
        color: #121212;
        margin: 0.5em 0;
        padding-left: 0.4em;
        border-left: 3px solid #ffd700;
      }
      .markdown-li .markdown-li {
        margin: 0.3em 0;
        padding-left: 0.2em;
        border-left: 2px solid #ffd700;
      }
      blockquote {
        background: #f8f8f8;
        border: 2px solid #000;
        padding: 1.5em;
        margin: 2em 0;
      }
      code {
        background: #000;
        color: #d4d4d4;
        padding: 0.2em 0.4em;
        font-family: 'Courier New', monospace;
      }
      pre code {
        background: #121212;
        color: #d4d4d4;
        padding: 2em;
        border-left: 8px solid #e31e24;
      }
      a {
        color: #1d71b8;
        text-decoration: none;
        font-weight: bold;
      }
      img {
        border-radius: 10px;
      }
      .markdown-body ol {
        color: #121212;
      }
      .markdown-ol {
        color: #121212;
      }
      .markdown-strong {
        color: #121212;
        font-weight: bold;
      }
      strong {
        color: #121212;
        font-weight: bold;
      }
      .markdown-body ul,
      .markdown-body ol {
        padding-left: 1em;
      }
      .markdown-body ul ul,
      .markdown-body ol ol,
      .markdown-body ul ol,
      .markdown-body ol ul {
        padding-left: 0.5em;
      }
      .markdown-li {
        margin: 0.4em 0;
        padding-left: 0.2em;
      }
    `
  },
  nordic: {
    name: '北欧简约',
    styles: `
      .markdown-body {
        color: #2c3338;
        line-height: 1.7;
        font-family: 'Inter', sans-serif;
        background: #fff;
        max-width: 750px;
        margin: 0 auto;
        font-size: 16px;
        padding: 20px;
      }
      .markdown-h1, .markdown-h2, .markdown-h3,
      .markdown-h4, .markdown-h5, .markdown-h6 {
        color: #1f2937;
        font-weight: 500;
        letter-spacing: -0.02em;
      }
      .markdown-h1 {
        font-size: 2.2em;
        margin-bottom: 1.5em;
      }
      .markdown-h2 {
        font-size: 1.7em;
        color: #374151;
      }
      .markdown-li {
        color: #4b5563;
        margin: 0.6em 0;
        padding-left: 0.4em;
      }
      .markdown-li .markdown-li {
        margin: 0.3em 0;
        padding-left: 0.2em;
      }
      blockquote {
        background: #f9fafb;
        border-radius: 4px;
        padding: 1.5em;
        margin: 2em 0;
        color: #6b7280;
      }
      code {
        background: #f3f4f6;
        color: #374151;
        padding: 0.2em 0.4em;
        border-radius: 4px;
        font-family: 'SF Mono', monospace;
      }
      pre code {
        background: #1f2937;
        color: #d4d4d4;
        padding: 1.5em;
        border-radius: 6px;
      }
      a {
        color: #059669;
        text-decoration: none;
      }
      img {
        border-radius: 10px;
      }
      .markdown-body ol {
        color: #2c3338;
      }
      .markdown-ol {
        color: #2c3338;
      }
      .markdown-strong {
        color: #2c3338;
        font-weight: bold;
      }
      strong {
        color: #2c3338;
        font-weight: bold;
      }
      .markdown-body ul,
      .markdown-body ol {
        padding-left: 1em;
      }
      .markdown-body ul ul,
      .markdown-body ol ol,
      .markdown-body ul ol,
      .markdown-body ol ul {
        padding-left: 0.5em;
      }
      .markdown-li {
        margin: 0.4em 0;
        padding-left: 0.2em;
      }
    `
  },
  chinese: {
    name: '中式风格',
    styles: `
      .markdown-body {
        color: #333;
        line-height: 2;
        font-family: "Noto Serif SC", "SimSun", serif;
        background: #fff9f9;
        font-size: 16px;
        padding: 20px;
      }
      .markdown-h1, .markdown-h2, .markdown-h3,
      .markdown-h4, .markdown-h5, .markdown-h6 {
        color: #c41e3a;
        font-weight: 600;
        margin: 2em 0 1em;
        font-family: "Noto Serif SC", "SimSun", serif;
      }
      .markdown-h1 {
        font-size: 2.4em;
        text-align: center;
        border-bottom: 2px solid #c41e3a;
        padding-bottom: 0.3em;
      }
      .markdown-h2 {
        font-size: 1.8em;
        color: #8b0000;
        border-left: 4px solid #c41e3a;
        padding-left: 0.5em;
      }
      .markdown-li {
        color: #4a4a4a;
        margin: 0.5em 0;
        padding-left: 1em;
        position: relative;
      }
      .markdown-li:before {
        content: "";
      }
      .markdown-li > span:before {
        content: "•";
        color: #c41e3a;
        position: absolute;
        left: 0;
        margin-top: 1px;
      }
      .markdown-body ul {
        list-style: disc;
        padding-left: 0.8em;
        color: #c41e3a;
      }
      .markdown-body ul ul {
        padding-left: 0.8em;
      }
      .markdown-li .markdown-li > span:before {
        content: "•";
        font-size: 0.9em;
      }
      blockquote {
        border: none;
        background: #fff0f0;
        padding: 1.5em;
        margin: 2em 0;
        border-left: 4px solid #c41e3a;
        font-family: "Noto Serif SC", "KaiTi", serif;
      }
      code {
        background: #fff0f0;
        color: #c41e3a;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-family: "Source Code Pro", monospace;
      }
      pre code {
        background: #2b1216;
        color: #d4d4d4;
        padding: 1.5em;
        border-radius: 8px;
      }
      a {
        color: #c41e3a;
        text-decoration: none;
        border-bottom: 1px solid #ffcccb;
        transition: all 0.3s ease;
      }
      a:hover {
        background: #fff0f0;
      }
      img {
        border-radius: 10px;
      }
      .markdown-body ol {
        color: #333;
      }
      .markdown-ol {
        color: #333;
      }
      .markdown-strong {
        color: #333;
        font-weight: bold;
      }
      strong {
        color: #333;
        font-weight: bold;
      }
      .markdown-body ul,
      .markdown-body ol {
        padding-left: 1em;
      }
      .markdown-body ul ul,
      .markdown-body ol ol,
      .markdown-body ul ol,
      .markdown-body ol ul {
        padding-left: 0.5em;
      }
      .markdown-li {
        margin: 0.4em 0;
        padding-left: 0.2em;
      }
    `
  }
}; 