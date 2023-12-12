import UploadForm from "../components/UploadForm";
import Header from "../components/Header";

export default function Dashboard() {
    return(
            <>
                <Header/>
                <h2>Dashboard</h2>
                <UploadForm />
            </>
        );
}