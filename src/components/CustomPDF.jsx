import React, { useState, useEffect } from 'react';
import { PDFViewer, PDFDownloadLink, BlobProvider, Document, Page, Text, Font, StyleSheet } from '@react-pdf/renderer';
import { useMediaQuery } from 'react-responsive';
import CustomCard from './CustomCard';
import { Button } from '@mui/material';
import { IoMdDownload } from 'react-icons/io';

// Register external font
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const CustomPDF = ({ formData }) => {
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
      marginBottom: 20
    },
    sectionTitle: {
      fontSize: 18,
      marginBottom: 10,
      fontFamily: 'Oswald'
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
      fontFamily: 'Times-Roman'
    },
    subtext: {
      fontSize: 11,
      marginLeft: 10,
      marginBottom: 3,
      fontFamily: 'Times-Roman'
    }
  });

  const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        {/* Title */}
        <Text style={styles.title}>INFLUENCER MARKETING AGREEMENT</Text>

        {/* Introduction */}
        <Text style={styles.sectionTitle}>This Influencer Marketing Agreement (the &ldquo;Agreement&rdquo;) is entered into on {formData.date} by and between:</Text>
        <Text style={styles.text}>{formData.advertiserName}, hereinafter referred to as the &ldquo;Advertiser&rdquo;</Text>
        <Text style={styles.text}>{formData.influencerName}, hereinafter referred to as the &ldquo;Influencer&rdquo;</Text>
        <Text style={styles.text}>{formData.platformProviderName}, hereinafter referred to as the &ldquo;Platform Provider&rdquo;</Text>

        {/* Section 1: Scope of Work */}
        <Text style={styles.sectionTitle}>1. SCOPE OF WORK</Text>
        <Text style={styles.text}>1.1 The Influencer agrees to create and publish the following content on behalf of the Advertiser:</Text>
        <Text style={styles.text}>a) Instagram Posts: {formData.instagramPosts} posts</Text>
        <Text style={styles.text}>b) Instagram Reels: {formData.instagramReels} reels</Text>
        <Text style={styles.text}>c) YouTube Videos: {formData.youtubeVideos} videos</Text>
        <Text style={styles.text}>d) YouTube Shorts: {formData.youtubeShorts} shorts</Text>

        <Text style={styles.text}>1.2 Content Requirements and Posting Schedule:</Text>
        <Text style={styles.text}>The Influencer agrees to create and post content according to the following specifications:</Text>
        <Text style={styles.text}>YouTube</Text>
        <Text style={styles.text}>Shorts</Text>
        <Text style={styles.subtext}>Date: [DATE]</Text>
        <Text style={styles.subtext}>Time: [TIME]</Text>
        <Text style={styles.subtext}>Details: [DETAILS]</Text>
        <Text style={styles.text}>Videos</Text>
        <Text style={styles.subtext}>[List any video requirements here]</Text>

        <Text style={styles.text}>Instagram</Text>
        <Text style={styles.text}>Posts</Text>
        <Text style={styles.subtext}>[List any post requirements here]</Text>
        <Text style={styles.text}>Reels</Text>
        <Text style={styles.subtext}>[List any reel requirements here]</Text>

        <Text style={styles.text}>1.3 The Influencer shall ensure that all content adheres to the specified requirements and is posted within the given date and time ranges.</Text>

        {/* Section 2: Compensation and Fees */}
        <Text style={styles.sectionTitle}>2. COMPENSATION AND FEES</Text>
        <Text style={styles.text}>2.1 The Advertiser agrees to pay a total sum of {formData.totalAmount} for the services outlined in this Agreement.</Text>
        <Text style={styles.text}>2.2 The payment structure is as follows:</Text>
        <Text style={styles.subtext}>a) Influencer&rsquo;s compensation: {formData.influencerAmount}</Text>
        <Text style={styles.subtext}>b) Frover&rsquo;s service fee: {formData.froverFeeAmount} ({formData.froverFeePercentage}% of the total amount)</Text>
        <Text style={styles.subtext}>c) Transaction fee: {formData.transactionFeeAmount}</Text>

        <Text style={styles.text}>2.3 The Advertiser shall pay the total sum of {formData.totalAmount} to the Platform Provider, which includes the Influencer&rsquo;s compensation, Frover&rsquo;s service fee, and the transaction fee.</Text>

        <Text style={styles.text}>2.4 Upon successful completion of the Influencer&rsquo;s obligations and after the review period, the Platform Provider shall transfer {formData.influencerAmount} to the Influencer, which is the total amount minus Frover&rsquo;s service fee and the transaction fee.</Text>

        <Text style={styles.text}>2.5 Payment Disputes: In the event of any payment disputes, the parties agree to first attempt to resolve the issue amicably. If no resolution is reached within 14 days, the dispute resolution process outlined in Section 12 will be initiated.</Text>

        {/* Section 3: Term */}
        <Text style={styles.sectionTitle}>3. TERM</Text>
        <Text style={styles.text}>3.1 This Agreement shall commence on the date of signing and shall continue until the completion of the services outlined in Section 1, unless terminated earlier as per the terms of this Agreement.</Text>

        {/* Section 4: Platform and Escrow Services */}
        <Text style={styles.sectionTitle}>4. PLATFORM AND ESCROW SERVICES</Text>
        <Text style={styles.text}>4.1 This Agreement is facilitated through the platform &quot;frover.io&quot;, operated by the Platform Provider.</Text>
        <Text style={styles.text}>4.2 The Platform Provider shall act as an escrow agent, holding the Advertiser&rsquo;s payment until the successful completion of the Influencer&rsquo;s obligations.</Text>

        {/* Section 5: Execution of Agreement */}
        <Text style={styles.sectionTitle}>5. EXECUTION OF AGREEMENT</Text>
        <Text style={styles.text}>5.1 The Influencer shall be deemed to have signed this Agreement upon entering the One-Time Password (OTP) provided by the Platform Provider.</Text>
        <Text style={styles.text}>5.2 The Advertiser shall be deemed to have signed this Agreement upon making the payment to the Platform Provider through the designated online payment method.</Text>
        <Text style={styles.text}>5.3 This Agreement shall come into effect only after both parties have completed their respective signing processes as outlined in 5.1 and 5.2.</Text>

        {/* Section 6: Influencer’s Obligations */}
        <Text style={styles.sectionTitle}>6. INFLUENCER’S OBLIGATIONS</Text>
        <Text style={styles.text}>6.1 The Influencer shall create and publish the content as specified in Section 1 of this Agreement.</Text>
        <Text style={styles.text}>6.2 The Influencer shall ensure that all content complies with the Advertiser&rsquo;s brand guidelines and any specific instructions provided.</Text>
        <Text style={styles.text}>6.3 The Influencer shall update the status of the content creation and publication on the Platform Provider&rsquo;s website (frover.io) upon completion of each task.</Text>

        {/* Section 7: Advertiser’s Obligations */}
        <Text style={styles.sectionTitle}>7. ADVERTISER’S OBLIGATIONS</Text>
        <Text style={styles.text}>7.1 The Advertiser shall provide the Influencer with all necessary materials, guidelines, and information required for the creation of the content.</Text>
        <Text style={styles.text}>7.2 The Advertiser shall make the full payment to the Platform Provider prior to the commencement of the Influencer&rsquo;s services.</Text>

        {/* Section 8: Platform Provider’s Obligations */}
        <Text style={styles.sectionTitle}>8. PLATFORM PROVIDER’S OBLIGATIONS</Text>
        <Text style={styles.text}>8.1 The Platform Provider shall hold the Advertiser&rsquo;s payment of {formData.totalAmount} in escrow until the successful completion of the Influencer&rsquo;s obligations.</Text>
        <Text style={styles.text}>8.2 The Advertiser shall release the payment to the Influencer within [NUMBER] business days after the Influencer has updated the status of all required content as completed on the platform and the Advertiser has approved the content (if applicable).</Text>
        <Text style={styles.text}>8.3 The Platform Provider shall retain its service fee of {formData.froverFeeAmount} and the transaction fee of {formData.transactionFeeAmount} from the total payment made by the Advertiser.</Text>

        {/* Section 9: Intellectual Property */}
        <Text style={styles.sectionTitle}>9. INTELLECTUAL PROPERTY</Text>
        <Text style={styles.text}>9.1 The Advertiser grants the Influencer a limited, non-exclusive license to use its trademarks, logos, and other branded materials solely for the purpose of creating the content specified in this Agreement.</Text>
        <Text style={styles.text}>9.2 The Influencer grants the Advertiser a perpetual, worldwide, royalty-free license to use, reproduce, distribute, and display the content created under this Agreement for marketing and promotional purposes.</Text>
        <Text style={styles.text}>9.3 The Influencer retains ownership of the created content but grants the Advertiser an exclusive license to use the content for</Text>
      </Page>
    </Document>
  );


  const isMobile = !useMediaQuery({ minWidth: 768 });

  return (
    <div>
      {isMobile ? (
        // Render BlobProvider for mobile screens
      <div className='flex flex-col gap-2 justify-center items-center h-800 bg-slate-800 text-white' style={{height: 600, width: 300}}>
        <div>Influencer_Marketing_Agreement.pdf</div>
        <BlobProvider document={<MyDocument />} fileName="Influencer_Marketing_Agreement.pdf">
          {({ url }) => (
            <a href={url} download="Influencer_Marketing_Agreement.pdf">
              <Button className='p-4' variant='contained'>
                <IoMdDownload className='m-2'/> 
                Open
              </Button>
            </a>
          )}
        </BlobProvider>
      </div>

      ) : (
        // Render PDFViewer for larger screens
        <PDFViewer className='w-full max-h-full' height={1200}>
          <MyDocument />
        </PDFViewer>
      )}
    </div>
  );
};

export default CustomPDF;
