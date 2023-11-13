import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';

const Linecharts = () => {
    const mathMarksData = [
        { student: 'Student A', marks: 85 },
        { student: 'Student B', marks: 75 },
        { student: 'Student C', marks: 90 },
        { student: 'Student D', marks: 60 },
        { student: 'Student E', marks: 80 },
        { student: 'Student f', marks: 45 },
        { student: 'Student g', marks: 75 },
        { student: 'Student h', marks: 90 },
        { student: 'Student i', marks: 38 },
        { student: 'Student j', marks: 65 },
      ];
      
    return (
        <div>
            <Lchart width={400} height={400} data={mathMarksData}>
                <XAxis dataKey="student"></XAxis>
                <YAxis dataKey="marks"></YAxis>
            <Line type="monotone" dataKey="marks" stroke="#8884d8" />
            
            </Lchart>
        </div>
    );
};

export default Linecharts;