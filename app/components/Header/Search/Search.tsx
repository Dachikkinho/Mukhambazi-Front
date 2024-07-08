import styles from "./Search.module.scss"

type Props = {
    placeholder: string;
    icon: string;
    width: number;
    height: number;
    onChange: (e: any) => void;
}

export const Search = ({ placeholder, icon, width, height, onChange }: Props) => {
    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder={placeholder}
                className={styles.mainSearch}
                onChange={onChange}
            />
            <img
                src={`icons/${icon}.svg`}
                alt="icon"
                className={styles.searchIcon}
                width={width}
                height={height}
            />
        </div>
    )
}