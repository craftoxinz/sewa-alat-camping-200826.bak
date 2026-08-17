import { Head, Link } from '@inertiajs/react';
import { format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { EllipsisIcon, PenIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import type { EquipmentCategoryType } from '@/features/equipment-categories/schema';
import {
    index,
    create,
    edit,
    destroy,
} from '@/routes/admin/equipment-categories';
interface Props {
    equipmentCategories: EquipmentCategoryType[];
}

const formatDate = (dateString: string) => {
    if (!dateString) {
        return '-';
    }

    return format(parseISO(dateString), 'dd MMM yyyy, HH:mm', { locale: enUS });
};

export default function Index({ equipmentCategories }: Props) {
    return (
        <>
            <Head title="Equipment Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* Page Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                            Equipment Categories
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Manage camping equipment categories used for
                            grouping in the catalog.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={create()} as="button">
                            Create new category
                            <PlusIcon data-icon="inline-end" />
                        </Link>
                    </Button>
                </div>

                {/* Table */}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Created at</TableHead>
                            <TableHead>Last modified at</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {equipmentCategories.map((equipmentCategory) => (
                            <TableRow key={equipmentCategory.name}>
                                <TableCell>{equipmentCategory.name}</TableCell>
                                <TableCell>
                                    <p className="max-w-xs truncate">
                                        {equipmentCategory.description}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    {formatDate(equipmentCategory.created_at)}
                                </TableCell>
                                <TableCell>
                                    {formatDate(equipmentCategory.updated_at)}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon-sm"
                                            >
                                                <EllipsisIcon />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent side="left">
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem asChild>
                                                    <Link
                                                        href={edit(
                                                            equipmentCategory,
                                                        )}
                                                        as="button"
                                                        className="w-full"
                                                    >
                                                        <PenIcon />
                                                        Edit
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem
                                                    variant="destructive"
                                                    asChild
                                                >
                                                    <Link
                                                        href={destroy(
                                                            equipmentCategory,
                                                        )}
                                                        as="button"
                                                        className="w-full"
                                                    >
                                                        <TrashIcon />
                                                        Delete
                                                    </Link>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Equipment Categories',
            href: index(),
        },
        {
            title: 'List',
        },
    ],
};
