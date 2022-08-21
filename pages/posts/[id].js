import { google } from 'googleapis';

export async function getServerSideProps({ query }) {

    // auth omitted...

    const { id } = query;
    const range = `Sheet1!A${id}:C${id}`;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range,
    });

    const [title, content] = response.data.values[0];
    console.log(title, content)

    return { 
        props: {
            title,
            content
        } 
    }
}

export default function Post({ title, content }) {
    return <article>
        <h1>{title}</h1>
        <div>{content}</div>
    </article>
}