interface Props {

    title: string;

    subtitle?: string;

}

export default function PageHeader({

    title,

    subtitle,

}: Props) {

    return (

        <header className="mb-10">

            <h1
                className="
                    text-5xl
                    font-black
                "
            >
                {title}
            </h1>

            {subtitle && (

                <p
                    className="
                        mt-3
                        max-w-3xl
                        text-lg
                        text-zinc-400
                    "
                >
                    {subtitle}
                </p>

            )}

        </header>

    );

}