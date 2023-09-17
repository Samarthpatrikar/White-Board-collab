//         //Kahn's Algorithm
    
        
//         vector<int>adj[V];
//         vector<int>ind(V,0);
        
//         for(int i=0;i<p.size();i++)
//         {
//             adj[p[i][1]].push_back(p[i][0]);
//             ind[p[i][0]]++;
//         }
        
//         queue<int>q;
        
//         for(int i=0;i<V;i++)
//         if(ind[i]==0)
//         q.push(i);
        
//         vector<int>topo;
        
//         while(q.size())
//         {
//             int node=q.front();
//             q.pop();
            
//             topo.push_back(node);
            
//             for(int i:adj[node])
//             {
//                 ind[i]--;
//                 if(ind[i]==0) q.push(i);
//             }
            
//         }
        
//         return topo.size()==V;



// // Toposort using DFS

// void topo(vector<int>adj[],int cur,vector<int>&vis,stack<int>&st)
// {
//      vis[cur]=1;
//      for(int i:adj[cur])
//      {
//         if(!vis[i]) dfs(adj,i,vis,st);
//      }
//    st.push(cur);
// }

