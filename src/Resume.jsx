import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';

function Resume() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center bg-gradient-to-br from-white to-[#F3F2F1]">
      <Container maxWidth="sm" className="text-center">
        <Typography variant="h4" className="text-cyan-400 mb-4 font-bold">
          Download My Resume
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-8">
          Click the button below to download a copy of my professional resume.
        </Typography>
        <Button
          variant="contained"
          href="https://drive.google.com/file/d/1-Xy-Beq91Y-XWg7vazDd-H2gl-eWspYZ/view?usp=sharing" // Replace with your actual resume path
          download="resume.pdf" // The name the file will be saved as
          sx={{
            bgcolor: '#0078D4',
            '&:hover': {
              bgcolor: '#005EA2',
            },
            py: 2,
            px: 4,
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          Download Resume
        </Button>
      </Container>
    </div>
  );
}

export default Resume;
