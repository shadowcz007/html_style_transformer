'use client';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { themes } from '../styles/markdownThemes';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function MarkdownRenderer({ content }) {
  const [currentTheme, setCurrentTheme] = useState('wabisabi');

  return (
    <Card className="p-4">
      {/* 主题切换按钮组 */}
      <div className="flex gap-2 mb-4">
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
        }}
      >
        {content}
      </ReactMarkdown>

      <style jsx global>{`
        ${themes[currentTheme].styles}
      `}</style>
    </Card>
  );
} 