/* eslint-disable react/no-danger */

'use client';

import { Container } from '@mui/material';

type PostTextSectionProps = {
  body: string;
};

export function PostTextSection({ body }: PostTextSectionProps) {
  return (
    <div style={{ padding: '3rem 0', backgroundColor: '#FFF' }}>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Container>
    </div>
  );
}
