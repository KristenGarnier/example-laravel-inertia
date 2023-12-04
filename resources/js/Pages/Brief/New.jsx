import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import NewBriefForm from "./Partials/NewBriefForm";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Vos briefs
                </h2>
            }
        >
            <Head title="Briefs" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg mt-8">
                    <NewBriefForm className="max-w-xl" />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
