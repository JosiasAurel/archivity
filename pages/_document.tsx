
import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

class ArchivityDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <title>Archivity</title>
                    <meta name="theme-color" content="#fa07cd" />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default ArchivityDocument;