import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router, Link } from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import { Trash } from "lucide-react";

export default function Index({ auth, briefs }) {
    const { delete: destroy } = useForm({});

    function handleDelete(brief) {
        if (confirm("Are you sure you want to delete this brief?")) {
            destroy(
                route("briefs.destroy", {
                    id: brief.id,
                }),
                {
                    preserveScroll: true,
                    onFinish: () => router.reload([{ only: ["briefs"] }]),
                }
            );
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex flex-row justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Vos briefs
                    </h2>
                    <Link href={"/briefs/new"}>Ajouter un brief</Link>
                </div>
            }
        >
            <Head title="Briefs" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {briefs &&
                        briefs.map((brief) => {
                            return (
                                <div
                                    key={brief.id}
                                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-4 py-4 px-6 flex flex-row justify-between"
                                >
                                    <div className="flex flex-row items-center">
                                        <img
                                            src={brief.image}
                                            alt="Image du brief"
                                            className="w-12 h-12 rounded-full"
                                        />
                                        <div className="ms-4">
                                            <h2 className="text-lg font-bold">
                                                {" "}
                                                {brief.name}
                                            </h2>
                                            <p>
                                                {new Date(
                                                    brief.created_at
                                                ).toLocaleDateString("fr-FR")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <DangerButton
                                            onClick={() => handleDelete(brief)}
                                        >
                                            <Trash className="w-4 h-4" />
                                        </DangerButton>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
