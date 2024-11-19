import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35
    },
    title: {
        fontSize: 24,
        textAlign: "center"
    },
    text: {
        margin: 24,
        fontSize: 14,
        marginBottom: 12,
        textAlign: "justify",
        fontFamily: "Times-Roman"
    },
    image:{
        marginVertical: 15,
        marginHorizontal: 100
    },
    header: {
        fontSize: 24,
        marginBottom: 30,
        textAlign: "center",
        color: "grey"
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey"
    }
});
const MyDoc = () => {
    return (
        <Document>
            <Page size="A4" style={styles.body}>
                <Text style={styles.header} fixed>Your Applied Jobs: Tracking Your Career Moves</Text><br />
                <Image style={styles.image} src='https://i.postimg.cc/2jdV2Vmg/bg3.jpg'></Image>
                <Text style={styles.text}>The Applied Jobs page on JobSync is your personal hub to track the progress of all the job applications you’ve submitted. Designed with a user-friendly interface, it offers a comprehensive view of your applied positions, including job titles, company names, application dates, and current statuses.</Text>
                <Text style={styles.text}>This page helps you stay organized by categorizing applications into statuses such as Pending Review, Interview Scheduled, and Offer Received. With intuitive filtering and sorting options, you can quickly find specific jobs or monitor progress for roles that matter most.</Text>
                <Text style={styles.text}>Additionally, JobSync ensures real-time updates, so you’re always in the loop with employer responses. Whether you’re applying for remote, on-site, part-time, or hybrid roles, the Applied Jobs page makes managing your career search effortless and stress-free.</Text>
            </Page>
        </Document>
    );
};

export default MyDoc;