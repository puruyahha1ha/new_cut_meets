import type { FC } from 'react';
import { ModelCard } from './ModelCard';
import { fetchFilteredModels } from '@/services/list';

type Props = {
    query: string;
    currentPage: number;
};

export const ModelList: FC<Props> = async (props: Props) => {
    const models = await fetchFilteredModels(props.query, props.currentPage);
    return (
        <>
            {/* 画面幅でレイアウトを変える */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {models.map((model) => (
                    <ModelCard
                        key={model.id}
                        model={model}
                    />
                ))}
            </div>
        </>
    );
}