import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";

export default function NewBriefForm({ className = "" }) {
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            name: "",
            description: "",
            image: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("briefs.store"));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Ajouter un nouveau brief
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Ajouter un nouveau brief aux briefs existant
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="description" value="Description" />

                    <TextInput
                        id="description"
                        className="mt-1 block w-full"
                        value={data.description}
                        onChange={(e) => setData("description", e.target.value)}
                        required
                        autoComplete="description"
                    />

                    <InputError className="mt-2" message={errors.description} />
                </div>

                <div>
                    <InputLabel htmlFor="image" value="Image" />

                    <TextInput
                        id="image"
                        className="mt-1 block w-full"
                        value={data.image}
                        onChange={(e) => setData("image", e.target.value)}
                        required
                        autoComplete="image"
                    />

                    <InputError className="mt-2" message={errors.image} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>
                        Enregistrer
                    </PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Votre brief a bien été crée !
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
