import React from 'react';
import { Document, Page, Text, Font, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const CustomPDF = ({ formData }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Contract Agreement</Text>
        <Text style={styles.author}>{formData.date || ''}</Text>

        <Text style={styles.subtitle}>
          {formData.party1Name} vs. {formData.party2Name}
        </Text>

        <Text style={styles.sectionTitle}>YouTube</Text>
        <Text style={styles.sectionSubtitle}>Shorts:</Text>
        {formData.youtube.shorts.map((short, index) => (
          <Text key={index} style={styles.text}>
            {short.date} - {short.time}: {short.details}
          </Text>
        ))}
        <Text style={styles.sectionSubtitle}>Videos:</Text>
        {formData.youtube.videos.map((video, index) => (
          <Text key={index} style={styles.text}>
            {video.date} - {video.time}: {video.details}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Instagram</Text>
        <Text style={styles.sectionSubtitle}>Posts:</Text>
        {formData.instagram.posts.map((post, index) => (
          <Text key={index} style={styles.text}>
            {post.date} - {post.time}: {post.details}
          </Text>
        ))}
        <Text style={styles.sectionSubtitle}>Stories:</Text>
        {formData.instagram.stories.map((story, index) => (
          <Text key={index} style={styles.text}>
            {story.date} - {story.time}: {story.details}
          </Text>
        ))}
\
        <Text style={styles.text}>Other Stuff: {formData.otherStuff}</Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => (
            `${pageNumber} / ${totalPages}`
          )}
          fixed
        />
      </Page>
    </Document>
  );
};


const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: 'Times-Roman'
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
    marginBottom: 10
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  sectionTitle: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Oswald'
  },
  sectionSubtitle: {
    fontSize: 14,
    marginLeft: 20,
    marginBottom: 5,
    fontFamily: 'Oswald'
  },
  text: {
    marginLeft: 30,
    fontSize: 12,
    marginBottom: 5,
    fontFamily: 'Times-Roman'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey'
  },
});

export default CustomPDF;
