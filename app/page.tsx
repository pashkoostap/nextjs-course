import { Button, Heading, Paragraph, Tag } from '@/components';
import { Metadata } from 'next';

export default function Home() {
  return (
    <div>
      <Heading variant='h2'>some text</Heading>
      <Button variant='contained' size='large'>
        Some button
      </Button>
      <Button variant='outlined' size='large'>
        Some button
      </Button>
      <Button variant='contained' size='medium'>
        Some button
      </Button>
      <Button variant='contained' size='medium'>
        Some button
      </Button>
      <Button variant='outlined' size='small'>
        Some button
      </Button>
      <Button variant='outlined' size='small'>
        Some button
      </Button>
      <Paragraph>Text body1</Paragraph>
      <Paragraph variant='body2'>Text body2</Paragraph>

      {['tag1', 'tag2', 'tag3'].map((tag, i) => (
        <Tag variant='outlined' key={i}>
          {tag}
        </Tag>
      ))}
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
};
