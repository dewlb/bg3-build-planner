interface Props {

    title: string;

    children: React.ReactNode;

}

export default function DashboardSection({

    title,

    children,

}: Props) {

    return (

        <section className="mt-10">

            <h2
                className="
                    mb-5
                    text-2xl
                    font-bold
                "
            >
                {title}
            </h2>

            {children}

        </section>

    );

}