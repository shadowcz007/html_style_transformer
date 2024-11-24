'use client';
import { useState, useEffect } from 'react';
import TurndownService from 'turndown';
import MarkdownRenderer from './components/MarkdownRenderer';
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  const [markdown, setMarkdown] = useState('');
  const turndownService = new TurndownService();
  
  useEffect(() => {
    // 加载默认的Markdown内容
    fetch('/md/1.md')
      .then(response => response.text())
      .then(content => {
        setMarkdown(content);
      })
      .catch(error => {
        console.error('加载Markdown文件失败:', error);
        setMarkdown('# 加载失败\n\n请重试...');
      });
  }, []);
  
  const handleContentChange = (e) => {
    setMarkdown(e.target.value);
  };
  
  const handlePaste = (e) => {
    const textarea = e.target;
    const isAllSelected = 
      textarea.selectionStart === 0 && 
      textarea.selectionEnd === textarea.value.length;
    const isEmpty = textarea.value.length === 0;

    // 在全选或输入框为空的情况下执行自定义粘贴逻辑
    if (isAllSelected || isEmpty) {
      e.preventDefault();
      const clipboardData = e.clipboardData || window.clipboardData;
      const htmlContent = clipboardData.getData('text/html');
      
      if (htmlContent) {
        const markdownContent = turndownService.turndown(htmlContent);
        setMarkdown(markdownContent);
      } else {
        const textContent = clipboardData.getData('text/plain');
        setMarkdown(textContent);
      }
    }
    // 如果不是全选且不为空，则使用默认的粘贴行为
  };

  return (
    <div className="flex h-screen">
      {/* 左侧编辑区 */}
      <div className="w-1/2 p-4">
        <ScrollArea className="h-full">
          <Textarea
            className="min-h-[90vh] w-full resize-none"
            value={markdown}
            onChange={handleContentChange}
            onPaste={handlePaste}
            placeholder="在这里粘贴 Markdown 或富文本内容..."
          />
        </ScrollArea>
      </div>
      
      <Separator orientation="vertical" />
      
      {/* 右侧预览区 */}
      <div className="w-1/2 p-4">
        <ScrollArea className="h-full">
          <div className="prose dark:prose-invert max-w-none">
            <MarkdownRenderer content={markdown} />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
