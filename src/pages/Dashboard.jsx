import { DashboardContainer } from "../components/DashboardContainer/DashboardContainer"
import { DashboardHeader } from "../components/DashboardHeader/DashboardHeader"

export const Dashboard = ({students, onDelete}) => {
    return (
        <>
            <DashboardHeader />
            <DashboardContainer students={students} onDelete={onDelete} />
        </>
    )
}