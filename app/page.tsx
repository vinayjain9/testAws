import { onSubmit } from "./action";

export default function Home() {
    return (
        <main className="">
            <form action={onSubmit}>
                <input type="file" name="file" />
                <input type="submit" value="Upload" />
            </form>
 <img src="s3://testimguplode/6XShZpNd220dokjoK8gwM" alt="img " />
        </main>
    );
}
