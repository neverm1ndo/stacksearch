import { QuestPipe } from './quest.pipe';

describe('QuestPipe', () => {
  const pipe = new QuestPipe();
  it('cut topic and replace entities', () => {
    expect(pipe.transform('<p>I am having a confusion between this two kinds of code and want to know, what is the difference between them:</p><pre><code>$object-&gt;$lol↵// and↵$object-&gt;lol↵</code></pre>↵')).toBe('I am having a confusion between this two kinds of code and want to know, what is the difference between them:...');
  });
});
