'use client';
import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { themes } from '../styles/markdownThemes';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function MarkdownRenderer({ content }) {
  const [currentTheme, setCurrentTheme] = useState('wabisabi');
  const markdownRef = useRef(null);

  const preprocessMarkdown = (text) => {
    return text.replace(/\*\*[^*]+\*\*(?![.,!?;:，。！？；：])/g, match => match + ' ');
  };

  const copyHtmlToClipboard = () => {
    if (!markdownRef.current) return;
    
    const htmlContent = markdownRef.current.innerHTML;
    
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlContent;
    document.body.appendChild(tempElement);
    
    const range = document.createRange();
    range.selectNode(tempElement);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    try {
      document.execCommand('copy');
      alert('HTML内容已复制到剪贴板！');
    } catch (err) {
      console.error('复制失败:', err);
      alert('复制失败，请重试');
    }
    
    selection.removeAllRanges();
    document.body.removeChild(tempElement);
  };

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          {Object.entries(themes).map(([themeKey, theme]) => (
            <Button
              key={themeKey}
              variant={currentTheme === themeKey ? "default" : "outline"}
              onClick={() => setCurrentTheme(themeKey)}
              size="sm"
            >
              {theme.name}
            </Button>
          ))}
        </div>
        
        <Button
          variant="default"
          onClick={copyHtmlToClipboard}
          size="sm"
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-md transition-all duration-200 hover:shadow-lg"
        >
          复制富文本
        </Button>
      </div>

      <div ref={markdownRef}>
        <ReactMarkdown 
          rehypePlugins={[rehypeRaw]} 
          remarkPlugins={[remarkGfm]}
          className="markdown-body"
          components={{
            h1: ({node, ...props}) => <h1 className="markdown-h1" {...props} />,
            h2: ({node, ...props}) => <h2 className="markdown-h2" {...props} />,
            h3: ({node, ...props}) => <h3 className="markdown-h3" {...props} />,
            h4: ({node, ...props}) => <h4 className="markdown-h4" {...props} />,
            h5: ({node, ...props}) => <h5 className="markdown-h5" {...props} />,
            h6: ({node, ...props}) => <h6 className="markdown-h6" {...props} />,
            li: ({node, ...props}) => <li className="markdown-li" {...props} />,
            img: ({node, ...props}) => (
              <img 
                className="max-w-full h-auto" 
                {...props} 
                style={{ maxWidth: '100%' }}
              />
            ),
          }}
        >
          {preprocessMarkdown(content)}
        </ReactMarkdown>
      </div>

      <style jsx global>{`
        ${themes[currentTheme].styles}
      `}</style>
    </Card>
  );
} 