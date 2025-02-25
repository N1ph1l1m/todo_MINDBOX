import styles from "../../App/Styles/Listitem.module.css"
export const ListItem = ({name}:{name:string})=>{
    return (<>
            <div className={styles.listItemWrap}>
                <label className={styles.checkboxLabel} >
                <input type="checkbox"  className={styles.hiddenCheckbox}  />
                <span className={styles.customCheckbox}></span>
                    {name}
                </label>
            </div>
    </>)
}