

interface Props {
    heroName: string;
    numberRecordsFound: number;
}

export const SearchAlert = ({ heroName, numberRecordsFound }: Props): JSX.Element => {
    return (
        <>

            {
                (heroName === '') ? <div className="alert alert-primary">Search a hero </div> :
                    (numberRecordsFound === 0) ? <div className="alert alert-danger">No hero with <b>{heroName}</b> </div> : <></>
            }

        </>
    )
}
