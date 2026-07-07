import PageHeader from "../components/common/PageHeader";

export default function NotFoundPage() {
    return (
        <div className="mx-auto max-w-7xl p-8">
            <PageHeader
                title="404"
                subtitle="The page you're looking for doesn't exist."
            />
        </div>
    );
}