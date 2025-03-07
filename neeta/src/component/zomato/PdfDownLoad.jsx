

import { Fragment, useState } from "react";
import data from "./zomatodata";
import { Page, Text, View, Document, StyleSheet, Image, PDFDownloadLink } from "@react-pdf/renderer";

// PDF Styles
const styles = StyleSheet.create({
    page: { padding: 20 },
    section: { marginBottom: 10, padding: 10, borderBottom: "1px solid #ccc" },
    title: { fontSize: 18, fontWeight: "bold" },
    image: { width: 100, height: 100, marginBottom: 5 },
    rating: { fontSize: 14, marginTop: 5 },
});

// PDF Document Component
const ZomatoPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {data?.map((el, index) => (
                <View key={index} style={styles.section}>
                    <Text style={styles.title}>{index + 1}. {el?.info?.name}</Text>
                    <Image src={el?.info?.image?.url} style={styles.image} />
                    <Text style={styles.rating}>Rating: {el?.info?.rating?.rating_text}</Text>
                </View>
            ))}
        </Page>
    </Document>
);

// Main Component
export default function PdfDownLoad() {
    return (
        <>   
                {/* PDF Download Button */}
                <PDFDownloadLink document={<ZomatoPDF />} fileName="ZomatoData.pdf">
                {({ loading }) => (
                    <button className="btn btn-primary mt-3">
                        {loading ? "Generating PDF..." : "Download PDF"}
                    </button>
                )}
            </PDFDownloadLink>

            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((el, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={el?.info?.image?.url} style={{ height: "100px", width: "100px" }} />
                            </td>
                            <td>{el?.info?.name}</td>
                            <td className={
                                el?.info?.rating?.rating_text >= 4
                                    ? "text-success"
                                    : el?.info?.rating?.rating_text >= 3
                                        ? "text-info"
                                        : "text-warning"
                            }>
                                {el?.info?.rating?.rating_text}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    );
}




