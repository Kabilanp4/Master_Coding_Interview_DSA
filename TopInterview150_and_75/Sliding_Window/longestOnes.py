class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        start =0
        maxCount =0
        zeroCount =0
        for index,end in enumerate(nums):
            if end == 0:
                zeroCount +=1
            while zeroCount > k:
                if nums[start] == 0:
                    zeroCount-=1
                start+=1
            maxCount = max(maxCount,index-start+1)
        return maxCount

SolutionClass = Solution()
value = SolutionClass.longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3)
print('Result',value)
