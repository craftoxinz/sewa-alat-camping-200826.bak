import { Head, Link, useForm } from '@inertiajs/react';
import * as React from 'react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import type { EquipmentCategoryType } from '@/features/equipment-categories/schema';
import { index, store } from '@/routes/admin/equipment-categories';

type EquipmentCategoryForm = Pick<
    EquipmentCategoryType,
    'name' | 'description'
>;

export default function Create() {
    const { data, setData, post, processing, errors } =
        useForm<EquipmentCategoryForm>({
            name: '',
            description: '',
        });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        post(store().url);
    };

    return (
        <>
            <Head title="Create Equipment Category" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Create Equipment Category</CardTitle>
                        <CardDescription>
                            Add a new category to organize camping equipment in
                            the catalog.
                        </CardDescription>
                    </CardHeader>

                    {/* Create Form */}
                    <CardContent>
                        <form
                            onSubmit={handleSubmit}
                            className="w-full sm:max-w-sm"
                        >
                            <FieldGroup>
                                <Field>
                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData('name', e.target.value)
                                        }
                                        placeholder="Type your category here."
                                        required
                                    />
                                    <InputError message={errors.name} />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="description">
                                        Description
                                    </FieldLabel>
                                    <Textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value,
                                            )
                                        }
                                        placeholder="Describe this equipment category."
                                        className="resize-none"
                                    />
                                    <InputError message={errors.description} />
                                </Field>
                                <Field orientation="horizontal">
                                    <Button variant="outline" asChild>
                                        <Link href={index()} as="button">
                                            Cancel
                                        </Link>
                                    </Button>
                                    <Button type="submit" disabled={processing}>
                                        {processing && <Spinner />}
                                        Submit
                                    </Button>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

Create.layout = {
    breadcrumbs: [
        {
            title: 'Equipment Categories',
            href: index(),
        },
        {
            title: 'Create',
        },
    ],
};
